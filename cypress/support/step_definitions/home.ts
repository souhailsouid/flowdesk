import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../page_objects/home";

const homePage = new HomePage();


Cypress.on('uncaught:exception', () => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

Given("User is on the home page", () => {
    cy.visit('/')
    homePage.interceptRequest()
})

When(`User selects {string} as currency pair`, (currencyPair: string) => {
    homePage.selectCurrencyPair(currencyPair);
});
Then("User should see each elements of the page", () => {
    homePage.getWebElements();
})

