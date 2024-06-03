import { getInput, getButton } from '../support/app.po';

describe('issue-tracker-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should create a new task', () => {
    const message = 'Welcome to issue-tracker!'

    getInput().type(message);
    getButton().click();
    
    cy.get('h3').should('contain', message);
  });
});
