import loginPage from '../../pageObject/loginPage' 
const inputan = require('../../fixtures/data.json')

describe('Place Order Automation Test', () => {
  const LoginPage = new loginPage()
  beforeEach(() => {cy.visit('https://www.demoblaze.com/index.html')})

  it('TC-PlaceOrder-01 -- Verify Successfully Access Cart', () => {
    // -- LOGIN FUNCTION
    cy.get('#login2').click()
    cy.wait(400)
    cy.get(LoginPage.log_username).type(inputan.vld_username)
    cy.get(LoginPage.log_password).type(inputan.vld_password)
    cy.get('[onclick="logIn()"]').click()
     // --
    cy.get('#cartur').click()
    cy.get('.col-lg-8 > h2').should('have.text', 'Products') // Assertions
  })

  it('TC-PlaceOrder-02 -- Verify Place Order Successfully', () => {
    // -- LOGIN FUNCTION
    LoginPage.loginUser(inputan.vld_username,inputan.vld_password)
  
    //-- ADD to CART function
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    
    //----- 

    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click() // Click Place Order
    cy.wait(400)

    cy.get('#name').type('Celvin')
    cy.get('#country').type('Indonesia')
    cy.get('#city').type('Bali')
    cy.get('#card').type('123123')
    cy.get('#month').type('Juli')
    cy.get('#year').type('2023')

    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() // Click Purchase Button
    
    cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!') // Assertion

  })

  it('TC-PlaceOrder-03 -- Verify Place Order Successfully', () => {
    // -- LOGIN FUNCTION
    LoginPage.loginUser(inputan.vld_username,inputan.vld_password)
  
    //-- ADD to CART function
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    
    //----- 

    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click() // Click Place Order
    cy.wait(400)

    cy.get('#name').type('Celvin')
    cy.get('#card').type('123123')

    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() // Click Purchase Button
    
    cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!') // Assertion

  })

  it('TC-PlaceOrder-04 -- Verify Place Order Failed', () => {
    // -- LOGIN FUNCTION
    LoginPage.loginUser(inputan.vld_username,inputan.vld_password)
  
    //-- ADD to CART function
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    
    //----- 

    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click() // Click Place Order
    cy.wait(400)

    cy.get('#country').type('Indonesia')
    cy.get('#city').type('Bali')
    cy.get('#month').type('Juli')
    cy.get('#year').type('2023')

    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() // Click Purchase Button
    
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('Please fill out Name and Creditcard.')
    })

    

  })

  it('TC-PlaceOrder-05 -- Verify Place Order Failed', () => {
    // -- LOGIN FUNCTION
    LoginPage.loginUser(inputan.vld_username,inputan.vld_password)
  
    //-- ADD to CART function
    //cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    //cy.get('.col-sm-12 > .btn').click()
    
    //----- 

    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click() // Click Place Order
    cy.wait(400)

    cy.get('#name').type('Celvin')
    cy.get('#country').type('Indonesia')
    cy.get('#city').type('Bali')
    cy.get('#card').type('123123')
    cy.get('#month').type('Juli')
    cy.get('#year').type('2023')

    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() // Click Purchase Button
    
    cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!') // Assertion

  })

})