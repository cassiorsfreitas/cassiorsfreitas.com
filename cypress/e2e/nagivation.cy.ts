const pageTitles = {
  home: 'Cássio Freitas',
  work: 'check my work',
  blog: 'read my blog',
  stack: 'get my stuff'
}

describe('Nagivations tests', () => {
  it('Should navigate to the home page', () => {
    cy.visit('/')
    cy.get('nav').contains('home').click()
    cy.contains(pageTitles.home)
    cy.url().should('include', '/')
  })

  it('Should navigate to the work page', () => {
    cy.get('nav').contains('work').click()
    cy.contains(pageTitles.work)
    cy.url().should('include', '/work')
  })

  it('Should navigate to the blog page', () => {
    cy.get('nav').contains('blog').click()
    cy.contains(pageTitles.blog)
    cy.url().should('include', '/blog')
  })

  it('Should navigate to the stack page', () => {
    cy.get('nav').contains('stack').click()
    cy.contains(pageTitles.stack)
    cy.url().should('include', '/stack')
  })
})
