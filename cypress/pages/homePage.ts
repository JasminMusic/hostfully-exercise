interface HomePageElements {
  addComputerButton: string;
  computerFilter: string;
  computerFilterApplyButton: string;
  computerTable: string;
  existingComputer: string;
  firstComputer: string;
}

class HomePage {
  elements: HomePageElements = {
    addComputerButton: '#add',
    computerFilter: '#searchbox',
    computerFilterApplyButton: '#searchsubmit',
    computerTable: 'table[class="computers zebra-striped"]',
    existingComputer: 'table.computers a[href*="/computers/381"]',
    firstComputer: 'tbody > :nth-child(1) > :nth-child(1)',
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

  clickAddComputer(): void {
    cy.get(this.elements.addComputerButton).click();
  }

  clickExistingComputer(): void {
    cy.get(this.elements.existingComputer).click();
  }

  clickOnComputerFilterButton(): void {
    cy.get(this.elements.computerFilterApplyButton).click();
  }

  typeInFilter(text: string): void {
    cy.get(this.elements.computerFilter).type(text);
  }

  visibleComputerTable(): void {
    cy.get(this.elements.computerTable).should('be.visible');
  }

  checkIfComputerExists(computerName: string): void {
    cy.get(this.elements.computerTable).should('contain', computerName);
  }

  checkIfComputerIsDeleted(computerName: string): void {
    cy.get(this.elements.firstComputer).should('not.have.text', computerName);
  }
}

export default new HomePage();
