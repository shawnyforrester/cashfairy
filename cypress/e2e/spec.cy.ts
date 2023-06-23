describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Cash Fairy')
  })

  //cypress uses css selectors to find elements on the page

  it( 'it should show a home page', () => {
    cy.visit('/')

    cy.get('h1').should('contain', 'Cash Fairy')
    cy.get('h2').should('contain', 'Welcome to Cash Fairy')

})
})