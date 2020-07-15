Feature: Landing Page

	Scenario: Landing
    Given I visit the landing page
		Then the title should be "Next.js Boilerplate"
		And I should see "Welcome to Next.js" in the main heading

