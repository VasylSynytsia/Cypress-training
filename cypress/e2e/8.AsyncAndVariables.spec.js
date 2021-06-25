///<reference types="Cypress"/>

describe("Learning",() => {

    it("1st lesson", function () {

        let curentURL = ''
        cy.visit('cypress/index.html')
        cy.url().then(url => {
            (curentURL = url)
            expect(curentURL).to.contains('index.html')
        })
    })
}) 