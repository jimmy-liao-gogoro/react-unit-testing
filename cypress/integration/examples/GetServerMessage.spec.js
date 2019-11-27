/// <reference types="Cypress" />

context('GetServerMessage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/get-server-message');
  });

  it('should display empty server message', () => {
    cy.get('div > p')
      .should('contain', 'Server Message:');
  });

  it('should get server message after user clicks the button', () => {
    cy.get('div > button')
      .click();

    cy.get('div > p')
      .should('contain', 'Server Message: hello world');
  });

  it('should get mock server message after user clicks the button', () => {
    cy.server();
    cy.route('GET', '/v2/5185415ba171ea3a00704eed', { hello: 'cypress' }).as('getServerMessage');

    cy.get('div > button')
      .click();
    cy.wait('@getServerMessage');

    cy.get('div > p')
      .should('contain', 'Server Message: hello cypress');
  });
});
