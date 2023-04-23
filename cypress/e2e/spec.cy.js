
describe('Peace of Paradise App', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('shows the site title', () =>{
    cy.title().should('eq', 'Peace of Paradise')
  })

  it('checks if nav links direct to respsective pages', () =>{
    cy.get('nav').should('be.visible')
    cy.get('nav').contains('a').click()
    cy.url().should('include', '/')
  })

  it('checks if footer links can be seen', () =>{
   cy.get('footer').should('be.visible')
  })

  it('add to cart button clicks', () =>{
    cy.visit('localhost:3000/products')
    cy.get('button').contains('Add To Cart').click()
  })



})