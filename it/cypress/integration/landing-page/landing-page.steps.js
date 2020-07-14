/* global cy */
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit the landing page', () => { cy.visit('http://localhost:3000') })
Then('the title should be {string}', (string) => {
  cy.title().should('contain', string)
})
Then('I should see {string} in the main heading', (string) => {
  cy.get('h1').should('contain', string)
})
