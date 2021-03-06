import "cypress-file-upload"

Cypress.Commands.add('demoBlazeUrl', () => {
    cy.visit('https://www.demoblaze.com/index.html')
})

Cypress.Commands.add('loginDemoBlaze', () => {
    cy.get('#login2').should('be.visible').click()
    cy.get('#loginusername').type('jojo-test', {force: true}).should('have.value', 'jojo-test')
    cy.get('#loginpassword').type('jojo', {force: true}).should('have.value', 'jojo')
    cy.get('button').contains('Log in').click()
})