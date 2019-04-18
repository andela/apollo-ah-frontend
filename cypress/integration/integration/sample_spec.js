/* eslint-disable no-undef */
const appUrl = 'http://localhost:8080';
describe('Does not do much', () => {
  it('Does not do much', () => {
    expect(true).to.equal(true);
  });
  it('should setup home page', () => {
    cy.visit(appUrl);
    cy.contains('Authors Haven');
    cy.contains('Login').click();
    cy.url()
      .should('include', '/login');
  });

  it('should go to login page', () => {
    cy.visit(appUrl);
    cy.contains('Login').click();
    cy.url()
      .should('include', '/login');
  });
});
