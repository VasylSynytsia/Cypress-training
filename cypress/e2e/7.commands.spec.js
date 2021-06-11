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

    it('Cookie', function(){
        cy.setCookie('username', 'VasyanTest')
        cy.getCookie('username').should('have.property', 'value', 'VasyanTest')
        cy.setCookie('token', '123456789').should('have.property', 'value', '123456789')
        cy.getCookies().should('have.length', 2)
    })

    it('Cookie 2', function(){
        cy.getCookies().should('have.length', 0)
    })


    /*it('Clock', function(){
        const now = new Date(2021, 7, 22).getTime()
        cy.clock(now)
    })*/

    it('Wrap', function(){
        const car = {
            color: 'red',
            model: 2020,
            isNew: true,
            turnOn: function () {
                return 'the car is on'
            }
        }
        cy.wrap(car).should('have.property', 'color', 'red')
    })
    
    it('Invoke', function(){
        const car2 = {
            color: 'blue',
            model: 2010,
            isNew: false,
            turnOn: function () {
                return 'the car is on'
            }
        }
    cy.wrap(car2).its('color')
    cy.wrap(car2).invoke('turnOn')
    })

    /*it('Then', function(){
        cy.get().then(Element => {

        })
    })*/

    it('Expect', function(){

        const test = [
            {id:1, title: 'tea'},
            {id:2, title: 'coffee'},
            {id:3, title: 'milk'}
        ]

        cy.wrap(test).then(test => {
            expect(test[1].title).to.contains('coffee')
        })

        cy.url().then(url => {
            expect(url).to.contains('index.html')
        })
    })

    it('Command', function(){
        cy.get('.card-deck').each($element =>{
            cy.log($element.text())
            cy.wrap($element).should('contain', 'Pro')
        })
    })

}) 