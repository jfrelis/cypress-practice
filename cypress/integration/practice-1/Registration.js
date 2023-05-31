/**
* Diasumsikan ini belum mengerti assertions dan juga contains.
* Sehingga tidak ada validasi dan penggunaan contains di script ini.
*/

describe('Registration for DemoQA site', function () {
    it('Registration with valid input', function () {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Jo')
        cy.get('#lastName').type('Jo')
        cy.get('#userEmail').type('jojo@test.id')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('0812345678')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click()
        cy.get('#currentAddress').type('rumah')
        cy.get('#submit').click()
        cy.get('#closeLargeModal').click()
    })
})