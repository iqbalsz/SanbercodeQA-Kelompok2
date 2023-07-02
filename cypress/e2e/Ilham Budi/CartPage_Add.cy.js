import loginPage from '../../pageObject/loginPage'
const inputan = require('../../fixtures/data.json')

describe('Cart Page Add', () => {
  const LoginPage = new loginPage()

  it('TC-LogIn-01 -- Verify Log In Successfully', () => {
    cy.visit('https://www.demoblaze.com/index.html')
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
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#more-information').should('be.visible')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })

  it.skip('TC-AddtoCart-01 -- Product Added Successfully -- 02 ', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(4) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#more-information').should('be.visible')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })

  it.skip('TC-AddtoCart-01 -- Product Added Successfully -- 03', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(7) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#more-information').should('be.visible')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })

  it('TC-CartPage-01 -- Product Has Been Add ', () => {
    cy.visit('https://www.demoblaze.com/cart.html')
    cy.get('.success > :nth-child(1)').should('be.visible')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })
})