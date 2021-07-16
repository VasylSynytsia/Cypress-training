///<reference types="Cypress"/>

describe("Suite 5",() => {

    it("first", function () {
        cy.visit('cypress/index.html')
        cy.fixture('user').then(user => {
            cy.log(user.email)
            cy.log(user.password)
        })
    })

    it("Paste text from fixtures", function () {
        cy.fixture('user').then(user => {
            cy.get('[data-cy=email]').type(user.email)
            cy.get('#inputPassword').type(user.password)
        })
    })

    beforeEach (() => {
        cy.fixture('user').as('user')
    })

    it("Create varieble for test", function () {
        cy.get('@user').then(user => {
            cy.log(user)
        })
    })

})