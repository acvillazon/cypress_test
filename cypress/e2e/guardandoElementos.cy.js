Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})

describe('Guardando Elementos', () =>{
    
    it('Repetición', () =>{
        cy.visit("/automation-practice-form")
        
        cy.get("input[placeholder='First Name']").parent();

        cy.get("input[placeholder='First Name']").parents();
        
        cy.get("input[placeholder='First Name']").parents().find("label");
        
        cy.get("form").find("label")
    })
    
    it.only('Evitar Repetición', () =>{
        cy.visit("/automation-practice-form")
        cy.get("input[placeholder='First Name']").parents("form").then((form) =>{
            let divs = form.find("div");
            let labels = form.find("label");
            let inputs = form.find("input");

            expect(inputs.length).to.eq(15);
            cy.wrap(inputs).should("have.length",15);
            expect(divs.length).to.eq(70);
            expect(labels.length).to.eq(16);

        });        
        
        cy.get("form").find("label")
    })
})