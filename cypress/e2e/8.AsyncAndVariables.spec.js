///<reference types="Cypress"/>

describe("Suite 4.1",() => {

    it("1st lesson", function () {

        let curentURL = ''
        cy.visit('cypress/index.html')
        cy.url().then(url => {
            (curentURL = url)
            expect(curentURL).to.contains('index.html')
        })
    })


    it("2nd lesson - Aliase", function () {
        cy.visit('cypress/index.html')
        cy.url().as('url')
        cy.get('@url')
    })


}) 

describe("Suite 4.1",() => {

    beforeEach('varieble', function() {
        cy.visit('cypress/index.html')
        cy.url().as('url')
    })

    it('3rd lesson', function () {
        cy.log(this.url)
    })
})