import loginPage from '../../pageObject/loginPage'
const inputan = require('../../fixtures/data.json')

describe('Sign Up Test', () => {
  const LoginPage = new loginPage()
  beforeEach(() => {cy.visit('https://www.demoblaze.com/index.html')})

  it('TC-SignUp-01 -- Verify Sign Up Successfully', () => {
    cy.get('#signin2').click() // Klik menu header Sign Up
    cy.wait(400)
    cy.get(LoginPage.reg_uname).type(inputan.vld_username) // Input Username/Email
    cy.get(LoginPage.reg_password).type(inputan.vld_password) // Input Password
    cy.get('[onclick="register()"]').click() // klik tombol Sign Up
    // cy.on('window:alert', (t)=>{
    //   expect(t).to.contains('Sign up successful.')
    // })
    // cy.screenshot({capture:'runner'})
  })

  it('TC-SignUp-02 -- Verify Sign Up Failed -- Taken Username', () => {
    cy.get('#signin2').click() // Klik menu header Sign Up
    cy.wait(400)
    cy.get(LoginPage.reg_uname).type(inputan.vld_username) // Input Username/Email
    cy.get(LoginPage.reg_password).type(inputan.vld_password) // Input Password
    cy.get('[onclick="register()"]').click() // klik tombol Sign Up
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('This user already exist.')
    })
    .wait(1000)
    .screenshot({capture:'runner'})
  })

  it('TC-SignUp-03 -- Verify Sign Up Failed -- Blank Field', () => {
    cy.get('#signin2').click() // Klik menu header Sign Up
    cy.wait(400)
    cy.get('[onclick="register()"]').click() // klik tombol Sign Up
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('Please fill out Username and Password.')
    })
    .wait(1000)
    .screenshot({capture:'runner'})
  })
})