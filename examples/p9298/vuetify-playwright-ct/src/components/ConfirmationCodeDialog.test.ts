import { test, expect } from '@playwright/experimental-ct-vue'
import ConfirmationCodeDialog from './ConfirmationCodeDialog.vue'

const selectors = {
  title: 'title',
  input: 'code-input',
  cancel: 'cancel',
  approve: 'approve',
} as const

test('закрыт по умолчанию (modelValue=false)', async ({ mount, page }) => {
  await mount(ConfirmationCodeDialog)

  // В диалогах Vuetify контент может оставаться в DOM, поэтому проверяем "hidden".
  await expect(page.getByTestId(selectors.title)).toBeHidden()
})

test('открывается по модели (modelValue=true) и показывает элементы', async ({ mount, page }) => {
  await mount(ConfirmationCodeDialog, {
    props: { modelValue: true },
  })

  await expect(page.getByTestId(selectors.title)).toBeVisible()
  await expect(page.getByTestId(selectors.input)).toBeVisible()
  await expect(page.getByTestId(selectors.cancel)).toBeVisible()
  await expect(page.getByTestId(selectors.approve)).toBeVisible()
})

test('заголовок: по умолчанию и через prop title', async ({ mount, page }) => {
  const component = await mount(ConfirmationCodeDialog, {
    props: { modelValue: true },
  })
  await expect(page.getByTestId(selectors.title)).toHaveText('Ввод кода подтвеждения')

  await component.update({ props: { title: 'Введите код из СМС' } })
  await expect(page.getByTestId(selectors.title)).toHaveText('Введите код из СМС')
})

test('Отмена: закрывает диалог, эмитит cancel, не эмитит approve', async ({ mount, page }) => {
  let cancelCalls = 0
  let approveCalls: string[] = []
  const modelUpdates: boolean[] = []

  await mount(ConfirmationCodeDialog, {
    props: { modelValue: true },
    on: {
      cancel: () => cancelCalls++,
      approve: (code: string) => approveCalls.push(code),
      'update:modelValue': (v: boolean) => modelUpdates.push(v),
    },
  })

  await page.getByTestId(selectors.cancel).click()

  expect(cancelCalls).toBe(1)
  expect(approveCalls).toEqual([])
  expect(modelUpdates).toContain(false)
  await expect(page.getByTestId(selectors.title)).toBeHidden()
})

test('ОК: эмитит approve с введенным кодом и закрывает диалог', async ({ mount, page }) => {
  const approveCodes: string[] = []
  let cancelCalls = 0
  const modelUpdates: boolean[] = []

  await mount(ConfirmationCodeDialog, {
    props: { modelValue: true },
    on: {
      cancel: () => cancelCalls++,
      approve: (code: string) => approveCodes.push(code),
      'update:modelValue': (v: boolean) => modelUpdates.push(v),
    },
  })

  const input = page.getByTestId(selectors.input).locator('input')
  await input.fill('1234')

  await page.getByTestId(selectors.approve).click()

  expect(cancelCalls).toBe(0)
  expect(approveCodes).toEqual(['1234'])
  expect(modelUpdates).toContain(false)
  await expect(page.getByTestId(selectors.title)).toBeHidden()
})

test('при повторном открытии поле ввода очищается', async ({ mount, page }) => {
  const modelUpdates: boolean[] = []
  const component = await mount(ConfirmationCodeDialog, {
    props: { modelValue: true },
    on: {
      'update:modelValue': (v: boolean) => modelUpdates.push(v),
    },
  })

  const input = page.getByTestId(selectors.input).locator('input')
  await input.fill('9999')
  await expect(input).toHaveValue('9999')

  // Закрываем через отмену.
  await page.getByTestId(selectors.cancel).click()
  await expect(page.getByTestId(selectors.title)).toBeHidden()

  // Синхронизируем "родителя": применяем modelValue=false, который компонент запросил.
  expect(modelUpdates).toContain(false)
  await component.update({ props: { modelValue: false } })

  // Открываем снова через обновление props.
  await component.update({ props: { modelValue: true } })
  await expect(page.getByTestId(selectors.title)).toBeVisible()

  const inputAfterReopen = page.getByTestId(selectors.input).locator('input')
  await expect(inputAfterReopen).toHaveValue('')
})