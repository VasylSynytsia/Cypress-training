///<reference types="Cypress"/>

describe('Suite 2', ()=>{

    it("Login", function () {
        cy.visit("cypress/index.html");
    })

    it("find by text", function(){
        cy.get('body > :nth-child(8)').should('contain', 'list of')
        cy.get('.course-list > .list2').should('have.text', 'Selenium')
    })

    it("visible", function(){
        cy.get('.list9').should('have.text', 'react')
        cy.get('.list9').should('not.be.visible')
    })

    it("find by class", function(){
        cy.contains('detox').should('have.class', 'mobile')
    })

    it("find by css", function(){
        cy.get('.styles').should('have.css', 'background-color', 'rgb(255, 0, 0)')
        cy.get('.styles').should('have.css', 'font-size').and('eql', '15.36px')
    })

    it("visible", function(){
        cy.get('[data-cy=email]').should('be.visible')
        cy.get('[data-cy=name]').should('be.disabled')
    })


})