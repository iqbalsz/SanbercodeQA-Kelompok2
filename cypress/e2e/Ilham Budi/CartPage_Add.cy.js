import loginPage from '../../pageObject/loginPage'
const inputan = require('../../fixtures/data.json')

describe('Log In and Log Out Test', () => {
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
    //cy.screenshot({capture:'runner'})
  })

  it('TC-AddtoCart-01 -- Product Added Successfully ', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(1000)
    //cy.screenshot({capture:'runner'})
  })

  it('TC-AddtoCart-02 -- Product Added Successfully ', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(4) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(1000)
    //cy.screenshot({capture:'runner'})
  })

  it('TC-AddtoCart-03 -- Product Added Successfully ', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(7) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(1000)
    //cy.screenshot({capture:'runner'})
  })

  it('TC-CartPage-01 -- Product Has Been Add ', () => {
    cy.visit('https://www.demoblaze.com/cart.html')
    //cy.get('#cartur').click()
    cy.get('.success > :nth-child(1) > img').should('be.visible')
    //cy.get('.col-lg-8 > h2').should('be.visible')
    //cy.screenshot({capture:'runner'})
  })
})