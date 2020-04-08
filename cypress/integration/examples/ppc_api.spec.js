describe('TEST', function () {

    beforeEach(function () {

        cy.fixture('example').then((data)=>
        {
            this.data=data;
        })
    });

    //  setFlightCategory(){
    //     var page_category=this.data.page_category;
    //     console.log("the value of pagecategory  is"+page_category);
    // }


    it('has user', function () {
        // this.user exists
        expect(this.data.tester).to.equal('testtt')
    })

    it("Test GET functionality of JSON Sever", function () {
    cy.request
     //  ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page/1c83bab0-2c47-4f30-a68e-ace758a76171").as('param')
       ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page?filter[nid][condition][path]=drupal_internal__nid&filter[nid][condition][operator]" +
           "=%3D&filter[nid][condition][value]=238").as('param')
        cy.get('@param').should((response) => {

            for (var key in response.body.data.attributes) {
                //expect(key).to.have.property("drupal_internal__nid")
                console.log(key);
                console.log(response.body.data.attributes[key]);


            }

            expect(response.status).to.eql(200);
            expect(response).to.have.property('body')
            expect(response.body).to.have.property("__proto__")
            expect(response.body.data[0].attributes).to.have.property("drupal_internal__nid")




           // set flightcategory





           expect(response.body.data[0].attributes).to.have.property("drupal_internal__nid", 238);
            expect(response.body.data[0].attributes).to.have.property("drupal_internal__vid", 493);
           expect(response.body.data[0].attributes.field_page_category).to.eq("flights")
           expect(response.body.data[0].attributes.field_page_category).to.eq(this.data.page_category)
          // expect(response.body.data[0].attributes).to.have.property("field_page_category",this.data.page_category);


            // expect(response.body.data.attributes).to.have.property("title","Brisbane Flight Deals" );
            // expect(response.body.data.attributes).to.have.property("field_friendly_url","quote/flights/brisbane" );
            // expect(response.body.data.attributes).to.have.property("field_heading_form", "Your Flight Quote");
            // expect(response.body.data.attributes).to.have.property("field_heading_quality_score","Why Book With Flight Centre?");
            // expect(response.body.data.attributes).to.have.property("field_heading_trust_pilot", "Our Customers Love Us");
            // expect(response.body.data.attributes).to.have.property("field_hero_text", "Bored of searching online? Chat to our lovely Travel Consultants and grab an irresistible flight deal!");
            // expect(response.body.data.attributes).to.have.property("field_hero_title", "Brisbane Flight Deals");
          //  expect(response.body.data.attributes).to.have.property("field_page_category",this.data.page_category );





            // it('Validate the Title of the page', () => {
            //     cy.request
            //     ("https://dev-fcl-site-fcuk.pantheonsite.io/jsonapi/node/ppc_page/1c83bab0-2c47-4f30-a68e-ace758a76171").as('param')
            //     cy.get('@param')
            //         .its('body')
            //         .should('include', {attributes(title: 'Brisbane Flight Deals')});
        });


    });

});