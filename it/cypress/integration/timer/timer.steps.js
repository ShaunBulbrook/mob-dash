/* global cy */
const { Then, When } = require('cypress-cucumber-preprocessor/steps/index')

When('The timer should display {string}', (string) => {
  cy.get('[data-testid="timer"]').should('contains', '10:00')
})

Then('Then The timer should start counting down', () => {

})
