describe('My First Test', () => {

  it('visit the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Vuetify')
  })

})
