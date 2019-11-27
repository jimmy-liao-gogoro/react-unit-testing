/// <reference types="Cypress" />

context('ToDoList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/to-do-list');
  });

  it('should render an init item', () => {
    cy.get('table > tbody > tr > td:nth-child(1)')
      .should('contain', '0');

    cy.get('table > tbody > tr > td:nth-child(2)')
      .should('contain', 'Not Yet');

    cy.get('table > tbody > tr > td:nth-child(3)')
      .should('contain', 'Use Redux');
  });

  it('should render added item after user adds 1 item', () => {
    cy.get('input#standard-basic')
      .type('Practice Cypress');

    cy.get('div > button').click();

    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(1)')
      .should('contain', '1');
    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(2)')
      .should('contain', 'Not Yet');
    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(3)')
      .should('contain', 'Practice Cypress');
  });
});
