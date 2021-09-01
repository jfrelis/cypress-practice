describe('Testing for all features on Ultimate QA site', function () {
    it('kirim email dengan nama dan email yang valid', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('input[data-original_id="name"]').type('jojo').should('have.value', 'jojo')
        cy.get('input[data-original_id="email"]').type('jojo@test.id').should('have.value', 'jojo@test.id')
        cy.get('button[type="submit"]').contains('Email Me!').click()
        cy.url().should('contain', 'https://ultimateqa.com/simple-html-elements-for-automation/')
    })
    
    it('pilih gender', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('input[value="male"]').check().should('be.checked')
    })

    it('pilih kendaraan', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('input[value="Bike"]').check().should('be.checked')
        cy.get('input[value="Car"]').check().should('be.checked')
    })

    it('pilih merek kendaraan', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('audi')
        cy.get('option[value="audi"]').should('be.selected')
    })

    it('tombol click me pada simple controls', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('a').contains('Click Me').click()
        cy.get('.entry-title').should('contain', 'Button success')
        cy.url().should('include', '/button-success')
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})