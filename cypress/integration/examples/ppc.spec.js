/// <reference types="Cypress" />
describe('TEST', function () {




    it('submitting the form', function () {

        cy.visit("https://quote.flightcentre.co.uk/quote/flights/australia");
        cy.get('.is-multiline > :nth-child(1) > .field > .control > .select > select').select('London Heathrow')
        cy.get('.react-select-prefix__value-container').type('Dubai')
            .type('{enter}');
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log("err :" + err)
            console.log("runnable :" + runnable)
            return false
        })
        cy.get(':nth-child(3) > .field > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input')
           .type('12/12/2020')
            .type('{enter}');

        cy.get(':nth-child(4) > .field > .control > .react-datepicker-wrapper > .react-datepicker__input-container > input')
            .type('1/1/2021')
            .type('{enter}');

        cy.get(':nth-child(5) > .field > .control > .select > select').select('economy')
        cy.get(':nth-child(6) > .field > .control > .select > select').select('4');
        cy.get('.textarea').type('Web-development team testing.Please ignore')
        cy.get('.is-narrow > .field > .control > .select > select').select('Mrs')


        cy.get('input[name="firstName"]').type('Test Firstname');
        cy.get('input[name="surname"]').type( 'Test Surname');
        cy.get('div.columns>div>div>div>input[type="email"]').type( 'test@test.com');
        cy.get('div.columns>div>div>div>input[type="tel"]').type('07894098069');
        cy.get(':nth-child(4) > .column > .field > .control > .select > select').select('Morning_9am-12pm')
        cy.get('input[type=radio][value="0"]').click();
       // cy.wait(3000)
        cy.get('div.columns.newsletter-section button[type="submit"]').click();
        cy.get('input[value="Send to an expert consultant"]').click();




        // get telephone() {
        //     return $('div.columns>div>div>div>input[type="tel"]');
        // }
        //
        // get email() {
        //     return $('div.columns>div>div>div>input[type="email"]');
        // }
        //
        //
        // get callBackTime() {
        //     return $('#gatsby-focus-wrapper select[name="callbackTime"]');
        // }
        //
        // get callBackTimeOption() {
        //     return $('#gatsby-focus-wrapper select[name="callbackTime"] > option:nth-child(2)');
        // }
        //
        // get newsletterSubscription() {
        //     return $('input[type=radio][value="0"]');
        // }
        //
        // get submitButton() {
        //     return $('div.columns.newsletter-section button[type="submit"]');
        // }

    });


})