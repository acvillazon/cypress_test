Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})

describe('Tipos de Localizadores', () =>{
    it('Obtener elementos', () =>{
        cy.visit("/automation-practice-form")
        cy.get("input")
    })

    it('Obtener elementos por atributos', () =>{
        // cy.visit("/automation-practice-form")
        cy.get("[placeholder='First Name']")
    })

    it('Obtener elementos por atributos y por tag', () =>{
        // cy.visit("/automation-practice-form")
        cy.get("input[placeholder='First Name']")
    })

    it('Obtener elementos por ID', () =>{
        // cy.visit("/automation-practice-form")
        cy.get("#firstName")
    })

    it('Obtener elementos por Class', () =>{
        // cy.visit("/automation-practice-form")
        cy.get(".mr-sm-2.form-control")
    })
    
    it('Obtener elementos por Contains', () =>{
        // cy.visit("/automation-practice-form")
        cy.contains("Reading")
        cy.contains(".header-wrapper", "Widgets");
    })
    
    it('Obtener elemento padre', () =>{
        cy.get("input[placeholder='First Name']").parent();

        cy.get("input[placeholder='First Name']").parents();
        
        cy.get("input[placeholder='First Name']").parents().find("label");
        
        cy.get("form").find("label")
    })
})
