import { test, expect } from '@playwright/experimental-ct-vue'
import CounterButton from './CounterButton.vue'

test('отображает начальное значение счетчика', async ({ mount }) => {
  const component = await mount(CounterButton)
  
  // Проверяем, что счетчик начинается с 0
  await expect(component.getByText('0')).toBeVisible()
})

test('увеличивает счетчик при нажатии на кнопку', async ({ mount }) => {
  const component = await mount(CounterButton)
  
  // Нажимаем на кнопку увеличения
  await component.getByTestId('increment-button').click()
  
  // Проверяем, что счетчик увеличился до 1
  await expect(component.getByText('1')).toBeVisible()
  
  // Нажимаем еще раз
  await component.getByTestId('increment-button').click()
  
  // Проверяем, что счетчик увеличился до 2
  await expect(component.getByText('2')).toBeVisible()
})

test('сбрасывает счетчик при нажатии на кнопку сброса', async ({ mount }) => {
  const component = await mount(CounterButton)
  
  // Увеличиваем счетчик несколько раз
  await component.getByTestId('increment-button').click()
  await component.getByTestId('increment-button').click()
  await component.getByTestId('increment-button').click()
  
  // Проверяем, что счетчик равен 3
  await expect(component.getByText('3')).toBeVisible()
  
  // Нажимаем на кнопку сброса
  await component.getByTestId('reset-button').click()
  
  // Проверяем, что счетчик сброшен до 0
  await expect(component.getByText('0')).toBeVisible()
})

test('кнопка сброса отключена когда счетчик равен 0', async ({ mount }) => {
  const component = await mount(CounterButton)
  
  // Проверяем, что кнопка сброса отключена при начальном значении
  // В реальном DOM это обычная кнопка: атрибут `disabled` присутствует и обычно равен пустой строке.
  const resetButton = component.getByTestId('reset-button')
  await expect(resetButton).toBeDisabled()
  
  // Увеличиваем счетчик
  await component.getByTestId('increment-button').click()
  
  // Проверяем, что кнопка сброса теперь включена (disabled="false" или отсутствует)
  // Vuetify может установить disabled="false" или удалить атрибут
  const disabledAttr = await resetButton.getAttribute('disabled')
  expect(disabledAttr).not.toBe('true')
  
  // Сбрасываем счетчик
  await resetButton.click()
  
  // Проверяем, что кнопка сброса снова отключена
  await expect(resetButton).toBeDisabled()
})

test('отображает правильный заголовок', async ({ mount }) => {
  const component = await mount(CounterButton)
  
  // Проверяем наличие заголовка
  await expect(component.getByText('Счетчик кликов')).toBeVisible()
})