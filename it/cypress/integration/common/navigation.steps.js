/* global cy */

import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I visit the landing page', () => { cy.visit('http://localhost:3000') })
