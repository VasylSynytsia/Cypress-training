///<reference types="Cypress"/>

describe('Suite 2', ()=>{

    it("Login", function () {
        cy.visit("cypress/index.html");
    })

    it("find by text", function(){
        cy.get('body > :nth-child(10)').should('contain', 'list of')
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

    it("find by attribute", function(){
        cy.get('.random-image').should('have.attr', 'src', 'https://picsum.photos/seed/picsum/700/500')
        cy.get('.random-image').should('have.attr', 'src').and('eql', 'https://picsum.photos/seed/picsum/700/500')
    })

    it('find by value', function(){
        cy.get('[data-cy=email]').type('vasyatest@email.com').should('have.value', 'vasyatest@email.com')
    })

    it('test', function(){
        //cy.get('#courses').select('appium').should('be.selected')!!!
        cy.get('#inputPassword').click().should('be.focused')
        cy.get('#Fries').click().should('be.checked')
    })


})