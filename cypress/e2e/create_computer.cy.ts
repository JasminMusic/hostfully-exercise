import HomePage from 'cypress/pages/homePage';
import CreateComputerPage from '../pages/computerPage';
import * as computerFixture from '../fixtures/computerFixture.json';
import {
  customFormatDate,
  discontinuedDate,
  introducedDate,
  randomComputerName,
} from '../support/helperFunctions';

beforeEach(() => {
  cy.visit('/');
});

describe('Tests related to the Create Computer screen', () => {
  it('Add a new computer', () => {
    HomePage.clickAddComputer();
    CreateComputerPage.inputComputerName(randomComputerName);
    CreateComputerPage.inputIntroduced(
      customFormatDate(introducedDate.toString())
    );
    CreateComputerPage.inputDiscontinued(
      customFormatDate(discontinuedDate.toString())
    );
    CreateComputerPage.selectCompany(computerFixture.appleCompany);
    CreateComputerPage.clickCreateComputer();
    CreateComputerPage.validateMessage(
      `Done !  Computer ${randomComputerName} has been created`
    );
  });

  it('Added computer is shown in the list', () => {
    HomePage.clickAddComputer();
    CreateComputerPage.inputComputerName(randomComputerName);
    CreateComputerPage.inputIntroduced(
      customFormatDate(introducedDate.toString())
    );
    CreateComputerPage.inputDiscontinued(
      customFormatDate(discontinuedDate.toString())
    );
    CreateComputerPage.selectCompany(computerFixture.appleCompany);
    CreateComputerPage.clickCreateComputer();
    CreateComputerPage.validateMessage(
      `Done !  Computer ${randomComputerName} has been created`
    );
    HomePage.typeInFilter(randomComputerName);
    HomePage.clickOnComputerFilterButton();
    HomePage.checkIfComputerExists(randomComputerName);
  });

  it('Negative test - Required fields are not populated', () => {
    HomePage.clickAddComputer();
    CreateComputerPage.clickCreateComputer();
    CreateComputerPage.computerNameErrorLabelValidation(
      computerFixture.requiredErrorMessage
    );
    CreateComputerPage.inputComputerName(randomComputerName);
    CreateComputerPage.inputIntroduced(computerFixture.wrongDateFormat);
    CreateComputerPage.clickCreateComputer();
    CreateComputerPage.computerNameErrorLabelValidation(
      computerFixture.wrongDateErrorMessage
    );
    CreateComputerPage.inputComputerName(randomComputerName);
    CreateComputerPage.inputDiscontinued(computerFixture.wrongDateFormat);
    CreateComputerPage.clickCreateComputer();
    CreateComputerPage.computerNameErrorLabelValidation(
      computerFixture.wrongDateErrorMessage
    );
  });

  it('Cancel should bring you back to homepage', () => {
    HomePage.clickAddComputer();
    CreateComputerPage.clickCancelButton();
    HomePage.visibleComputerTable();
  });
});
