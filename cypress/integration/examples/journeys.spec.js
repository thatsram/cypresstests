/// <reference types="Cypress" />
describe('TEST', function () {

    beforeEach(() => {
        cy.on("window:before:load", (win) => {
            cy.spy(win.console, "log");
        })
    })



    it('submitting the form', function () {

        // cy.visit("https://mavericks:WebSols@acquiadev.flightcentre.co.uk/holidays/dubai/habtoor-grand-resort-autograph-collection/");
        cy.visit("https://www.flightcentre.co.uk/holidays/canada/rocky-mountaineer#sm_RockyMountaineer");


        // //   cy.wait(3000);

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get('#select2-edit-departname-container').click();
        cy.get('span.select2-results>ul.select2-results__options>li.select2-results__option:nth-child(3)').click();
        cy.get('#select2-edit-destname-container').click();
        cy.get('.select2-search__field').type('Dubai')
            .type('{enter}')

        cy.get('#departdate').click();cy.get('#ui-datepicker-div > div.ui-datepicker-group.first.ui-datepicker-group-first > table > tbody > tr:nth-child(5) > td:nth-child(1) > a').click();

        cy.get('#select2-edit-flight-class-container').click();
        cy.get('ul#select2-edit-flight-class-results >li.select2-results__option:nth-child(2)').click();
        cy.get('#select2-edit-numtravel-container').click();
        cy.get('span.select2-results>ul.select2-results__options#select2-edit-numtravel-results>li.select2-results__option:nth-child(3)').click();
        cy.get('.form-textarea').type( 'Testing Please ignore');
        cy.get('#select2-edit-cus-title-container').click();
        cy.get('span.select2-results>ul.select2-results__options#select2-edit-cus-title-results>li.select2-results__option:nth-child(6)').click();
        cy.get('#edit-firstname').type('Test Firstname');
        cy.get('#edit-surname').type( 'Test Surname');
        cy.get('#edit-email').type( 'test@test.com');
        cy.get('#edit-phone--2').type('07894098069');
        cy.server();
        // cy.route({
        //       method:'GET',
        //      // url:'recaptcha_token_verify/*'
        //        url:'/ajax/nocache/internal/fcuk_consultant_info/91071'
        //   }).as('recaptchas');

        cy.route({
            method:'GET',
            url:'https://live-fcl-site-fcuk.pantheonsite.io/recaptcha_token_verify/*'
        }).as('recaptcha');
        cy.get('input[value="Send to an expert consultant"]').click();

        cy.wait('@recaptcha').then(console.log)

        cy.get("@recaptcha").then(function(xhr) {

            for (var key in xhr.response.body) {
                console.log(key);
                console.log(xhr.response.body[key]);


            }
            expect(xhr.status).to.eq(200);

        })







        cy.get('.confirmation-message > h3').contains("Thank you for your travel quote request");

    });


})