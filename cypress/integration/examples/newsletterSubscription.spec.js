/// <reference types="Cypress" />
describe('TEST', function () {

    beforeEach(() => {
        cy.on("window:before:load", (win) => {
            cy.spy(win.console, "log");
        })
    })



    it('submitting the form', function () {

        cy.visit("https://mavericks:WebSols@acquiadev.flightcentre.co.uk/holidays/dubai/habtoor-grand-resort-autograph-collection/");

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.clearCookies();
        cy.clearLocalStorage()


        let randomh = Math.random();


        cy.get('#edit-cd-firstname').type("Robot's Firstname");
        cy.get('#edit-cd-lastname').type("Robot's lastname");
        cy.get('#edit-email--2').type("email" + randomh + "@gmail.com");


        cy.server();
        cy.route({
            method: 'GET',
            url: 'https://live-fcl-site-fcuk.pantheonsite.io/recaptcha_token_verify/*'
        }).as('recaptcha');
        cy.get('input[value="Subscribe"]').click();

        cy.wait('@recaptcha').then(console.log)

        cy.get("@recaptcha").then(function (xhr) {

            for (var key in xhr.response.body) {
                console.log(key);
                console.log(xhr.response.body[key]);


            }
            expect(xhr.status).to.eq(200);

        })

    })



})