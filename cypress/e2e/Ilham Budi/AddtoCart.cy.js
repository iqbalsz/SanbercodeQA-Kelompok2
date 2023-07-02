import loginPage from '../../pageObject/loginPage'
const inputan = require('../../fixtures/data.json')

describe('Add to Cart', () => {
  const LoginPage = new loginPage()
  beforeEach(() => {cy.visit('https://www.demoblaze.com/index.html')})

  it('TC-LogIn-01 -- Verify Log In Successfully', () => {
    cy.get('#login2').click()
    cy.wait(400)
    cy.get(LoginPage.log_username).type(inputan.vld_username)
    cy.get(LoginPage.log_password).type(inputan.vld_password)
    cy.get('[onclick="logIn()"]').click()
    cy.get('#nameofuser').should('be.visible')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })

  it('TC-AddtoCart-01 -- Product Added Successfully -- 01', () => {
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#more-information').should('be.visible')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })

  it('TC-AddtoCart-01 -- Product Added Successfully -- 02', () => {
    cy.get(':nth-child(4) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#more-information').should('be.visible')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })

  it('TC-AddtoCart-01 -- Product Added Successfully -- 03', () => {
    cy.get(':nth-child(7) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#more-information').should('be.visible')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })
})