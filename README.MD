# Cypress Test Automation Project

This repository contains the automated tests developed for the user registration form, using **Cypress** and **Faker.js** to generate random data. It is part of the **Automation MasterClass** mentorship project focused on test automation practices, guided by **Alexandre Silva**.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** (usually installed with Node.js)
- **Cypress** (configured in the project)

## Installation

Follow these steps to set up the project locally:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
2. Navigate to the project directory:

   ```bash
   cd your-repository
3. Install the required dependencies:

   ```bash
   npm install

## Project Structure

- **cypress/**: Directory containing the automated tests.
- **cypress/e2e/**: Folder with the end-to-end (E2E) tests.
- **cypress/e2e/submitForm.cy.js**: Test file.
- **cypress/support/commands.js**: Contains custom commands, like `submitForm`.
- **package.json**: Project configuration file with dependencies.

## Faker Locale Configuration

This project uses **Faker.js** to generate random data such as name, email, phone, address, and more. Faker allows defining multiple locales to generate data in the desired language. To ensure the generated data matches the form’s requirements, the locale has been configured to include both **Brazilian Portuguese** (`pt_BR`) and **English** (`en`).

### How to configure the locale

In the test file, named **submitForm.cy.js**, the **Faker** locale has been set to use both Brazilian Portuguese and English. This allows generating data in either language, depending on the project’s needs.

`import { pt_BR, en, Faker } from '@faker-js/faker';`

`export const faker = new Faker({
locale: [pt_BR, en],  
});`

This configuration ensures that Faker generates Brazilian data (like states and cities) when needed, or English data as a fallback.

## Running Tests

To run the tests, use one of the following methods:

### Run tests in interactive mode

Cypress provides an interactive mode with a graphical interface. To start, run the command below:

`npx cypress open`

This will open the Cypress interface, where you can select and run tests manually.

### Run tests in headless mode (without the graphical interface)

If you want to run the tests directly in the terminal, use the following command:

`npx cypress run`

## Custom Commands

This project uses custom commands to automate the form submission process.

## Contribution

If you’d like to contribute improvements or fixes, feel free to open a **Pull Request** or report an **Issue**.
