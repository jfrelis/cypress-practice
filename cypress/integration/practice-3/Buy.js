describe('Buy a product', function () {
    it('Buy 1 product', function () {
        cy.demoBlazeUrl()
        cy.wait(1000)
        cy.get('a').contains('Iphone 6 32gb').click()
        cy.get('.name').should('contain', 'Iphone 6 32gb')
        cy.get('a').contains('Add to cart').click()
        cy.get('#cartur').should('be.visible').click()
        cy.wait(2000)
        cy.get('button').contains('Place Order').click()

        //Isi form pembelian
        cy.get('#name').type('jojo').should('have.value', 'jojo')
        cy.get('#country').type('indo').should('have.value', 'indo')
        cy.get('#city').type('jogja').should('have.value', 'jogja')
        cy.get('#card').type('12345678').should('have.value', '12345678')
        cy.get('#month').type('12').should('have.value', '12')
        cy.get('#year').type('2021').should('have.value', '2021')
        cy.get('button').contains('Purchase').click()
        cy.get('.confirm').click()
    })
})