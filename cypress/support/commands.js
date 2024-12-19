Cypress.Commands.add('submitForm', (name, email, password, gender, formattedBirthdate, number, streetAddress, state, city) => { 
    cy.get('#name').type(name, {force: true})
    cy.get('#email').type(email, {force: true})
    cy.get('#password').type(password)
    cy.get('#gender').type(gender)
    cy.get('#birthdate').type(formattedBirthdate)
    cy.get('#phone').type(number)
    cy.get('#address').type(streetAddress)
    cy.get('#state').select(state)
    cy.get('#city').type(city)

})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })