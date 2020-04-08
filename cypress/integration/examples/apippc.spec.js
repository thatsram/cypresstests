context("Test API for the PPC page", () => {

    it("Test GET functionality of node page", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {

            expect(response.status).to.eql(200);
            expect(response).to.have.property('body')
        })

    });


    it("Validate the drupal nid of the node", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {
            expect(response.body.data[0].attributes).to.have.property("drupal_internal__nid", 300);
        })

    });


    it("Validate the drupal Vid of the node", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {
            expect(response.body.data[0].attributes).to.have.property("drupal_internal__vid", 559);

        })

    });



    it("Validate the title of the node", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {
            expect(response.body.data[0].attributes).to.have.property("title","Sydney Flights" );

        })

    });



    it("Validate the friendly url of the node", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {
            expect(response.body.data[0].attributes).to.have.property("field_friendly_url","flights/quote/sydneyflights" );
        })

    });


    it("Validate the heading form of the node", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {
            expect(response.body.data[0].attributes).to.have.property("field_heading_form", "Get A Flight Quote ");
        })

    });

    it("Validate the Quality score of the node", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {
            expect(response.body.data[0].attributes).to.have.property("field_heading_quality_score","Why Book With Flight Centre?");
        })

    });


    it("Validate the Heading TP of the node", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {
            expect(response.body.data[0].attributes).to.have.property("field_heading_trust_pilot", "Our Customers Love Us ");
        })

    });


    it("Validate the page category of the node", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {
            expect(response.body.data[0].attributes).to.have.property("field_page_category", "flights");
        })

    });

    it("Validate the Hero text of the node", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {
            expect(response.body.data[0].attributes).to.have.property("field_hero_text", "Bored of searching online? Chat to our lovely Travel Consultants and grab an irresistible flight deal!");

        })

    });

    it("Validate the Hero title of the node", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {
            expect(response.body.data[0].attributes).to.have.property("field_hero_title", "Sydney Flights From");
        })

    });


    it("Validate the destination of the node", () => {

        cy.request
        ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter%5Bnid%5D%5Bcondition%5D%5Bpath%5D=drupal_internal__nid&filter%5Bnid%5D%5Bcondition%5D%5Boperator%5D=%3D&filter%5Bnid%5D%5Bcondition%5D%5Bvalue%5D=300").as('param')
        cy.get('@param').should((response) => {
            expect(response.body.data[0].attributes.field_destination[0]).to.eq("57296");
        })

        });


    })


