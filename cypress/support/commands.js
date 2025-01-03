Cypress.Commands.add('submitForm', (name, email, password, gender, birthdate, number, streetAddress, state, city) => { 
    cy.get('#name').should('be.visible').and('have.value', '').type(name, {force: true})
    cy.get('#email').should('be.visible').and('have.value', '').type(email, {force: true})
    cy.get('#password').should('be.visible').and('have.value', '').type(password, {log: false})
    cy.get('#gender').should('be.visible').type(gender)
    cy.get('#birthdate').should('be.visible').and('have.value', '').type(birthdate)
    cy.get('#phone').should('be.visible').and('have.value', '').type(number)
    cy.get('#address').should('be.visible').and('have.value', '').type(streetAddress)
    cy.get('#state').should('be.visible').and('have.value', '').select(state)
    cy.get('#city').should('be.visible').type(city)

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