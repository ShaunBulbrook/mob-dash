Feature: Timer

    Background: Background timer
        Given I visit the landing page

    Scenario: Timer init
        Then The timer should display "10:00"

    Scenario: Timer start
        When I press the start timer button
        Then The timer should start counting down
