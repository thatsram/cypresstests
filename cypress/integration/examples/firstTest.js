/// <reference types="Cypress" />
describe('My First Test', function() {
    it('Visits the flight centre homepage', function() {
        cy.visit('https://admin.flightcentre.co.uk');
        cy.get('.image-text-wrapper').should('have.length',12)
      //  cy.get('').eq(2).click()


        cy.get('.image-text-wrapper').find('h2').each(($el, index, $list) => {



            if($el.text()==='South Africa Holidays')
            {
                cy.wrap($el).click();
            }
        })

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
       // cy.contains('.panel-pane > .field', 'South Africa Holidays')
    })
})