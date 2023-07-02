describe('template spec', () => {
  it('TC-AddtoCart-01 -- Product Added Successfully ', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(1000)
    //cy.screenshot({capture:'runner'})
  })
  
  it('TC-CartPage-01 -- Product Has Been Add ', () => {
    cy.visit('https://www.demoblaze.com/cart.html')
    cy.get('#tbodyid > :nth-child(1) > :nth-child(1) > img').should('be.visible')
    //cy.screenshot({capture:'runner'})
  })

  it('TC-CartPage-02 -- Product Has Been Delete ', () => {
    cy.visit('https://www.demoblaze.com/cart.html')
    cy.get(':nth-child(2) > :nth-child(4) > a').click()
    //cy.screenshot({capture:'runner'})
  })
})