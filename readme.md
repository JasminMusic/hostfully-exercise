# Cypress Testing Framework

This repository contains automated tests for a web application, structured using the Page Object Model (POM) for better maintainability and readability. The tests are written with Cypress, a powerful and easy-to-use testing tool.

## Prerequisites

Before running the tests, ensure you have the following installed:
- Node.js (Recommended version: 14 or above)
- npm (Node Package Manager)

## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies listed in `package.json`.

## Structure

The test framework is organized as follows:
- `e2e/`: Contains test files written in Cypress.
- `pages/`: Contains Page Object classes representing pages of the web application.
- `fixtures/`: Contains static data used in tests.
- `support/`: Contains helper functions and utilities to support test scripts.

### Tests

The tests are separated into files based on the application's functionality they cover. For example:
- `create_computer.cy.ts`: Tests related to the Create Computer screen.
- `edit_delete_computer.cy.ts`: Tests related to Editing and Deleting Computers.
- Two tests are left failing on purpose due to the bug on page 


### Pages

Each page of the application has a corresponding Page Object class that encapsulates the page's elements and interactions. For instance:
- `homePage.ts`: Represents the Home Page and its actions.
- `computerPage.ts`: Represents the Create/Edit Computer Page and its actions.

### Helper Functions

Helper functions are utility functions that assist in generating dynamic test data or performing common actions. They are located in the `support/` directory.

## Running Tests

To run the tests, you have the following npm scripts available:
- `npm run cypress:open`: Opens the Cypress Test Runner in interactive mode.
- `npm run cypress:run`: Runs the tests in headless mode.

## Best Practices

This framework follows Cypress best practices:
- Using the Page Object Model for abstraction and code reusability.
- Keeping test data separate from test scripts using fixtures.
- Utilizing helper functions for common tasks and data generation.

