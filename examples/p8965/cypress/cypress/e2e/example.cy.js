describe('My First Test', () => {

    it('visit the app root url', () => {
        cy.visit('/')
        cy.contains('h1', 'You did it!')
    })

    it('visit the about url', () => {
        cy.visit('/about')
        cy.contains('h1', 'This is an about page')
    })

    it('show hidden area', () => {
        cy.visit('/about')
        cy.get('[data-test=hidden-area]').should('not.exist')
        cy.get('[data-test=main-button]').click()
        cy.get('[data-test=hidden-area]').should('be.visible')
    })

    it('load data from backend', () => {
        cy.visit('/about')

        cy.intercept('GET', 'http://backend.test/api/some/url', {
            body: {
                message: 'Hello world',
            },
        })

        cy.get('[data-test=load-button]').click()
        cy.get('[data-test=message]').contains('Hello world')
    })
})
