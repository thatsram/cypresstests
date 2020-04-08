describe('PPC Page TEST', function () {
    const baseURL = Cypress.env("site").url;

    before(function () {
        cy.visit(baseURL);
        cy.wait(1000);
        cy.get('#edit-name').type(Cypress.env("d8_user"));
        cy.get('#edit-pass').type(Cypress.env("d8_pass"));
        cy.get('#edit-submit').click();
    });


    before(function () {

        cy.fixture('ppcdata.json').then(function (data) {
            this.data = data;
        })
    });


    it('Creating a PPC node & checking the API response', function () {


        cy.get('#toolbar-item-administration').click();
        cy.get('#block-stark-tools > ul > li > a').click();
        cy.get('#edit-title-0-value').type(this.data.title, {force: true})
        cy.get('#edit-field-friendly-url-0-value').type(this.data.friendly_url, {force: true})
        cy.get('#edit-field-page-category').select(this.data.page_category, {force: true});
        cy.get('#edit-field-background-image-0-upload').click({force: true});
        cy.fixture('Sydney - 60.jpg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                cy.get('#edit-field-background-image-0-upload').upload({
                    fileContent,
                    fileName: 'Sydney - 60.jpg',
                    mimeType: 'image/jpeg',
                    encoding: 'utf8'
                })
            })

        cy.get('#edit-field-hero-title-0-value').type(this.data.hero_title, {force: true})
        cy.get('#edit-field-hero-text-0-value').type(this.data.hero_text, {force: true})
        cy.get('#edit-field-heading-quality-score-0-value').type(this.data.heading_quality_score, {force: true})
        cy.get('#cke_27').click({force: true});
        cy.get('.cke_source').type(this.data.text_quality_score, {force: true})

        cy.get('#edit-field-heading-form-0-value').type(this.data.heading_form, {force: true})
        cy.get('#edit-field-heading-trust-pilot-0-value').type(this.data.heading_trustpilot, {force: true})
        cy.get('.chosen-search-input')
            .type(this.data.destination, {force: true})
            .type('{enter}');
        cy.get('#edit-field-display-flight-prices').select(this.data.display_flight_prices, {force: true})
        console.log(this.data.display_flight_prices);
        cy.get('#edit-submit').click();
    })
});
