///<reference types="Cypress"/>

describe('Suite 3', ()=>{

    it("Login", function () {
        cy.visit("cypress/index.html");
    })

    it('URL', function(){
        cy.url().should('contain', 'cypress/index')
    })

    it('Title', function(){
        cy.title().should('eql', 'Cypress Tutorials test')
    })
    
    it('Go', function(){
        cy.get('[data-cy=AddAttr]').click()
        cy.go('back').url().should('contain', 'cypress')
        cy.go('forward').url().should('contain', 'cypress')
        cy.go('back')
    })

})