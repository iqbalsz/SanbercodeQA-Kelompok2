import loginPage from '../../pageObject/loginPage'
const inputan = require('../../fixtures/data.json')

describe('Cart Page Delete', () => {
  const LoginPage = new loginPage()
  it('TC-AddtoCart-01 -- Product Added Successfully ', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#more-information').should('be.visible')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })
  
  it('TC-CartPage-01 -- Product Has Been Add ', () => {
    cy.visit('https://www.demoblaze.com/cart.html')
    cy.get('#tbodyid > :nth-child(1) > :nth-child(1) > img').should('be.visible')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })

  it('TC-CartPage-02 -- Product Has Been Delete ', () => {
    cy.visit('https://www.demoblaze.com/cart.html')
    cy.get(':nth-child(2) > :nth-child(4) > a').click()
    cy.get('.col-lg-8 > h2').should('have.text', 'Products')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })
})