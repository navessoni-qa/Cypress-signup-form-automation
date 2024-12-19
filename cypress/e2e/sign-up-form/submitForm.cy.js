/// <reference types="cypress" />
import { pt_BR, en, Faker } from '@faker-js/faker';

// Creating a Faker instance with 'pt_BR' and 'en' locales
export const faker = new Faker({
  locale: [pt_BR, en],   // Locales set for Brazilian Portuguese and English
});

describe('Sign-up Form', () => {
    let name, email, password, gender, birthdate, formattedBirthdate, phone, address, state, city
    beforeEach( () => {
        cy.visit('/cadastro-simples.html')
        name = faker.person.fullName()
        email = faker.internet.email()
        password = faker.internet.password()
        gender = faker.person.gender()
        birthdate = faker.date.birthdate()
        formattedBirthdate = birthdate.toISOString().split('T')[0]
        phone = faker.phone.number()
        address = faker.location.streetAddress()
        state = faker.location.state()
        city = faker.location.city()

    })

    it ('Submit Form', () => {

        cy.submitForm(name, email, password, gender, formattedBirthdate, phone, address, state, city),
        cy.get(':nth-child(10) > label').should('contain', 'Aceito os termos e condições')
        cy.get('#terms').click({force: true} ),
        cy.get('#cadastroForm > button').should('contain', 'Cadastrar').click(),
        cy.get('#alertMessage').contains('Cadastro realizado com sucesso!'),
        cy.get('#closeAlert').click()}
    )}

)