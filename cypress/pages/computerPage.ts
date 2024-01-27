interface CreateComputerPageElements {
  computerNameField: string;
  introducedField: string;
  discontinuedField: string;
  companyDropdown: string;
  createComputerButton: string;
  alertMessage: string;
  errorLabel: string;
  deleteComputerButton: string;
  existingComputer: string;
  cancelButton: string;
}

class CreateComputerPage {
  elements: CreateComputerPageElements = {
    computerNameField: '#name',
    introducedField: '#introduced',
    discontinuedField: '#discontinued',
    companyDropdown: '[name=company]',
    createComputerButton: '[class="actions"] input[type="submit"]',
    alertMessage: 'div[class*="alert-message"]',
    errorLabel: '[class="clearfix error"] [class="help-inline"]',
    deleteComputerButton: '[class="topRight"] input[type="submit"]',
    existingComputer: 'table.computers a[href*="/computers/381"]',
    cancelButton: 'a[href="/computers"][class="btn"]',
  };

  validateDeletedMessage(): Cypress.Chainable<string> {
    return cy
      .get(this.elements.existingComputer)
      .invoke('text')
      .then(text => {
        const aceText = text.trim();
        return aceText;
      });
  }

  clickDeleteComputerButton(): void {
    cy.get(this.elements.deleteComputerButton).click({force: true});
  }

  computerNameErrorLabelValidation(message: string): void {
    cy.get(this.elements.errorLabel).invoke('text').should('include', message);
  }

  validateMessage(message: string): void {
    cy.get(this.elements.alertMessage)
      .invoke('text')
      .should('include', message);
  }

  clickCancelButton(): void {
    cy.get(this.elements.cancelButton).click();
  }

  inputComputerName(text: string): void {
    cy.get(this.elements.computerNameField).clear();
    cy.get(this.elements.computerNameField).type(text);
  }

  inputIntroduced(text: string): void {
    cy.get(this.elements.introducedField).type(text);
  }

  inputDiscontinued(text: string): void {
    cy.get(this.elements.discontinuedField).type(text);
  }

  selectCompany(text: string): void {
    cy.get(this.elements.companyDropdown).select(text);
  }

  clickCreateComputer(): void {
    cy.get(this.elements.createComputerButton).click();
  }
}

export default new CreateComputerPage();
