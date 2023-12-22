
Feature: Home page pages
    As an user
    I want to visit and see market data for selected currency pairs.

 Background:
    Given User is on the home page

    Scenario: Display - Dashboard - Pages 
        When User selects "BTCUSDT" as currency pair
        Then User should see each elements of the page

