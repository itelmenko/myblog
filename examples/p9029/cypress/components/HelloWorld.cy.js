import HelloWorld from '@/components/HelloWorld.vue'

describe('<HelloWorld />', () => {
  it('renders component', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HelloWorld)

    cy.contains('h2', 'Get started')
  })

  it('displays property\'s value', () => {
    const testValue = 'Test property text'
    cy.mount(HelloWorld, {
      props: {
        word: testValue,
      }
    })

    cy.contains('[data-test=property-value]', testValue)
  })
})
