import loginPage from '../../pageObject/loginPage' 
const inputan = require('../../fixtures/data.json')

describe('Place Order Automation Test', () => {
  const LoginPage = new loginPage()
  beforeEach(() => {cy.visit('https://www.demoblaze.com/index.html')})

  it('TC-PlaceOrder-01 -- Verify Successfully Access Cart', () => {
    cy.get('#login2').click()
    cy.wait(400)
    cy.get(LoginPage.log_username).type(inputan.vld_username)
    cy.get(LoginPage.log_password).type(inputan.vld_password)
    cy.get('[onclick="logIn()"]').click()
    cy.get('#cartur').click()
    cy.get('.col-lg-8 > h2').should('have.text', 'Products') // Assertions
  })
})