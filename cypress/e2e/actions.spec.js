///<reference types="Cypress"/>



describe('Suite 1', ()=>{
    it("Login", function () {
        cy.visit("cypress/index.html");
    })

    it("click", function() {
        cy.get('[data-cy="milticlick"]').click({multiple: true})
    })

    it("type", function() {
        cy.get('[data-cy="email"]').type('lol@email.com', {delay: 150})
    })

    it("select", function() {
        cy.get('#courses').select('selenium1')
    })

    it("check", function() {
        cy.get('#Banana').check()
        cy.get('#Nuts').check()    
        cy.get('#Nuts').uncheck()
    })

    it("clear inscription", function() {
        cy.get('#inputPassword').type('123123123',{delay: 150})
        cy.get('#inputPassword').clear()
    })

    it("right click + double click", function() {
        cy.get('[data-cy="login"]').rightclick()
        cy.get('.RememberMe').dblclick()
    })

    /*it("focus and blur", function() {
        cy.get('.mb-3').focus()
        cy.get('.mb-3').blur()
    })*/

    it("hover and long press", function(){
        cy.get('[data-cy=login]').trigger('mouseover')
    })
    
})
