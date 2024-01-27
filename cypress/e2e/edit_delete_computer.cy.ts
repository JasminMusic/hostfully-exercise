import EditDeletePage from '../pages/computerPage';
import HomePage from '../pages/homePage';
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

describe('Tests related to the Edit & Delete Computer', () => {
  it('Edit existing computer', () => {
    HomePage.clickExistingComputer();
    EditDeletePage.inputComputerName(randomComputerName);
    EditDeletePage.inputIntroduced(customFormatDate(introducedDate.toString()));
    EditDeletePage.inputDiscontinued(
      customFormatDate(discontinuedDate.toString())
    );
    EditDeletePage.selectCompany(computerFixture.appleCompany);
    EditDeletePage.clickCreateComputer();
    EditDeletePage.validateMessage(
      `Done !  Computer ${randomComputerName} has been updated`
    );
  });

  it('Negative test - Required fields are not populated', () => {
    HomePage.clickAddComputer();
    EditDeletePage.clickCreateComputer();
    EditDeletePage.computerNameErrorLabelValidation(
      computerFixture.requiredErrorMessage
    );
    EditDeletePage.inputComputerName(randomComputerName);
    EditDeletePage.inputIntroduced(computerFixture.wrongDateFormat);
    EditDeletePage.clickCreateComputer();
    EditDeletePage.computerNameErrorLabelValidation(
      computerFixture.wrongDateErrorMessage
    );
    EditDeletePage.inputComputerName(randomComputerName);
    EditDeletePage.inputDiscontinued(computerFixture.wrongDateFormat);
    EditDeletePage.clickCreateComputer();
    EditDeletePage.computerNameErrorLabelValidation(
      computerFixture.wrongDateErrorMessage
    );
  });

  it('Cancel should bring you back to homepage', () => {
    HomePage.clickAddComputer();
    EditDeletePage.clickCancelButton();
    HomePage.visibleComputerTable();
  });

  it('Should delete existing computer', () => {
    EditDeletePage.validateDeletedMessage().then(computerName => {
      HomePage.clickExistingComputer();
      EditDeletePage.clickDeleteComputerButton();
      EditDeletePage.validateMessage(
        `Done !  Computer ${computerName} has been deleted`
      );
    });
  });

  it.only('Should delete existing computer and they should not appear on table', () => {
    EditDeletePage.validateDeletedMessage().then(computerName => {
      HomePage.clickExistingComputer();
      EditDeletePage.clickDeleteComputerButton();
      EditDeletePage.validateMessage(
        `Done !  Computer ${computerName} has been deleted`
      );
    });
    HomePage.typeInFilter(computerFixture.firstComputer);
    HomePage.clickOnComputerFilterButton();
    HomePage.checkIfComputerIsDeleted(computerFixture.firstComputer);
  });
});
