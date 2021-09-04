describe('Login feature on Demoblaze site', function () {
    beforeEach(() => {
        cy.demoBlazeUrl()
    })

    it('Login with valid account', function () {
        cy.get('#login2').should('be.visible').click()
        cy.get('#loginusername').type('jojo-test', {force: true}).should('have.value', 'jojo-test')
        cy.get('#loginpassword').type('jojo', {force: true}).should('have.value', 'jojo')
        cy.get('button').contains('Log in').click()
    })

    it('Login with invalid account', function () {
        cy.get('#login2').should('be.visible').click()
        cy.get('#loginusername').type('jojo1112233', {force: true}).should('have.value', 'jojo1112233')
        cy.get('#loginpassword').type('jojo1112233', {force: true}).should('have.value', 'jojo1112233')
        cy.get('button').contains('Log in').click()
        cy.get('.modal-content').should('be.visible')
    })
})