/* global cy */
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('the title should be {string}', (string) => {
  cy.title().should('contain', string)
})
Then('I should see {string} in the main heading', (string) => {
  cy.get('h1').should('contain', string)
})
