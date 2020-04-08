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

        cy.fixture('example.json').then(function (data) {
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
            .type("Abha",{ force: true })
            .type('{enter}');
        // cy.get('#edit_field_destination_chosen')
        //     .click()
        //     .find('ul.chosen-results>li')
        //     .contains(this.data.destination).click({force: true});
        cy.get('#edit-field-display-flight-prices').select(this.data.display_flight_prices, {force: true})
        console.log(this.data.display_flight_prices);
        cy.get('#edit-submit').click()

        let currentURL
        cy.url().then(url => {

            currentURL = url

            let substr = currentURL.substring(currentURL.length - 3, currentURL.length);
            console.log("The value of Substring" + substr);
            return substr;

        }).as('substring')

        cy.get('@substring').then((nodevalue) => {
            console.log("The value of node is " + nodevalue);


            cy.request
            ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter[nid][condition][path]=drupal_internal__nid&filter[nid][condition][operator]" +
                "=%3D&filter[nid][condition][value]=" + nodevalue).as('param')
            cy.get('@param').should((response) => {

                for (var key in response.body.data.attributes)
                {
                    console.log(key);
                    console.log(response.body.data.attributes[key]);
                }

                expect(response.status).to.eql(200);
                expect(response).to.have.property('body')
                expect(response.body.data[0].attributes.drupal_internal__nid).to.eq(Number(nodevalue))
                expect(response.body.data[0].attributes.title).to.eq(this.data.title);
                expect(response.body.data[0].attributes.field_friendly_url).to.eq(this.data.friendly_url);
                expect(response.body.data[0].attributes.field_heading_form).to.eq(this.data.heading_form);
                expect(response.body.data[0].attributes.field_heading_quality_score).to.eq(this.data.heading_quality_score);
                expect(response.body.data[0].attributes.field_heading_trust_pilot).to.eq(this.data.heading_trustpilot);
                expect(response.body.data[0].attributes.field_hero_text).to.eq(this.data.hero_text);
                expect(response.body.data[0].attributes.field_hero_title).to.eq(this.data.hero_title);
                expect(response.body.data[0].attributes.field_page_category).to.eq(this.data.page_category);
                expect(response.body.data[0].attributes.field_text_quality_score.value).to.eq(this.data.text_quality_score);
                expect(response.body.data[0].attributes.field_destination[0]).to.eq(this.data.destination_id);

            })

        })


    });





})