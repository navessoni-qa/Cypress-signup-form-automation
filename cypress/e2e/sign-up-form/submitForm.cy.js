/// <reference types="cypress" />
import { pt_BR, en, Faker } from '@faker-js/faker';

// Creating a Faker instance with 'pt_BR' and 'en' locales
export const faker = new Faker({
  locale: [pt_BR, en],   // Locales set for Brazilian Portuguese and English
});

describe('Sign-up Form', () => {
    let name, email, password, gender, birthdate, phone, address, state, city
    beforeEach( () => {
        cy.visit('/cadastro-simples.html')
        name = faker.person.fullName()
        email = faker.internet.email()
        password = faker.internet.password(8)
        gender = faker.person.gender()
        birthdate = faker.date.birthdate({minAge: 18, maxAge: 65}).toISOString().split('T')[0]
        phone = faker.phone.number('###########')
        address = faker.location.streetAddress()
        state = faker.location.state()
        city = faker.location.city()

    })

    it ('Submit Form', () => {

        cy.submitForm(name, email, password, gender, birthdate, phone, address, state, city),
        cy.get(':nth-child(10) > label').should('contain', 'Aceito os termos e condições')
        cy.get('#terms').should('be.visible').click(),
        cy.get('#cadastroForm > button').should('not.be.disabled').click(),
        cy.get('#alertMessage').contains('Cadastro realizado com sucesso!'),
        cy.get('#closeAlert').click();
    })}

)