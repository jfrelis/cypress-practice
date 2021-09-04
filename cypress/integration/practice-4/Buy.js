describe('Buy some products', function () {
    it('buy 3 products', function () {
        cy.demoBlazeUrl()
        cy.loginDemoBlaze()
        cy.get('a[id="itemc"]').contains('Phones').click({force: true})
        cy.wait(1000)
        cy.contains('HTC One M9').click()
        cy.get('.name').should('contain', 'HTC One M9')
        cy.get('a').contains('Add to cart').click()

        cy.get('a').contains('Home').click()
        cy.get('a[id="itemc"]').contains('Laptops').click({force: true})
        cy.wait(1000)
        cy.contains('Dell i7 8gb').click()
        cy.get('.name').should('contain', 'Dell i7 8gb')
        cy.get('a').contains('Add to cart').click()

        cy.get('a').contains('Home').click()
        cy.wait(1000)
        cy.get('a[id="itemc"]').contains('Monitors').click({force: true})
        cy.wait(1000)
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.name').should('contain', 'Apple monitor 24')
        cy.get('a').contains('Add to cart').click()

        cy.get('#cartur').should('be.visible').click()
        cy.get('button').contains('Place Order').click({force: true})

        //Isi form pembelian
        cy.get('#name').type('jojo').should('have.value', 'jojo')
        cy.get('#country').type('jogja').should('have.value', 'jogja')
        cy.get('#city').type('jogja').should('have.value', 'jogja')
        cy.get('#card').type('123456789').should('have.value', '123456789')
        cy.get('#month').type('12').should('have.value', '12')
        cy.get('#year').type('2020').should('have.value', '2020')

        cy.get('button').contains('Purchase').click()
        cy.get('.confirm').click()
    })
})