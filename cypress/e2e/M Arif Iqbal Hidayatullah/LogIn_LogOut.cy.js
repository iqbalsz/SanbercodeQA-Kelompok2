import loginPage from '../../pageObject/loginPage'
const inputan = require('../../fixtures/data.json')

describe('Log In and Log Out Test', () => {
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

  it('TC-LogIn-02 -- Verify Log In Failed -- Wrong password', () => {
    cy.get('#login2').click()
    cy.wait(400)
    cy.get(LoginPage.log_username).type(inputan.vld_username)
    cy.get(LoginPage.log_password).type('WrongPassword')
    cy.get('[onclick="logIn()"]').click()
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('Wrong password.')
    })
    .wait(1000)
    .screenshot({capture:'runner'})
  })

  it('TC-LogIn-02 -- Verify Log In Failed -- Blank Field', () => {
    cy.get('#login2').click()
    cy.wait(400)
    cy.get('[onclick="logIn()"]').click()
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('Please fill out Username and Password.')
    })
    .wait(1000)
    .screenshot({capture:'runner'})
  })

  it.only('TC-LogOut-01 -- Verify Log Out Successfully', () => {
    LoginPage.loginUser(inputan.vld_username,inputan.vld_password)
    cy.get('[onclick="logOut()"]').click()
    cy.get('#login2').should('be.visible')
    cy.wait(1000)
    cy.screenshot({capture:'runner'})

  })


})