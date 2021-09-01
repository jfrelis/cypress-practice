var randomUser = generateRandomUser();
function generateRandomUser(){
	const time = new Date().getTime()
	return "jojo"+time;
}

describe('Register feature on Demoblaze site', function () {
    beforeEach(() => {
        cy.demoBlazeUrl()
    })

    it('Register with unregistered user', function () {
        cy.get('#signin2').contains('Sign up').should('be.visible').click()
        cy.get('#sign-username').type(randomUser, {force: true}).should('have.value', randomUser)
        cy.get('#sign-password').type('password', {force: true}).should('have.value', 'password')
        cy.get('button').contains('Sign up').click()
    })

    it('Register with registered user', function () {
        cy.get('#signin2').contains('Sign up').should('be.visible').click()
        cy.get('#sign-username').type('jojo', {force: true}).should('have.value', 'jojo')
        cy.get('#sign-password').type('password', {force: true}).should('have.value', 'password')
        cy.get('button').contains('Sign up').click()
        cy.get('.modal-content').should('be.visible')
    })
})