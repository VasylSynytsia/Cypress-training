///<reference types="Cypress"/>

describe('Suite 2', ()=>{

    it("Login", function () {
        cy.visit("cypress/index.html");
    })

    it("find by text", function(){
        cy.get('body > :nth-child(6)').should('contain', 'list of')
        cy.get('.course-list > .list2').should('have.text', 'Selenium')
    })

    it("2", function(){
        
    })

})