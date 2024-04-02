// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import data from "../fixtures/example.json";

Cypress.Commands.add("login", () => {
    cy.get("input#user-name").type(data.username);
    cy.get("input#password").type(data.password);
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
});

Cypress.Commands.add("information", () => {
    cy.get("input#first-name").type(data.first_name);
    cy.get("input#last-name").type(data.last_name);
    cy.get("input#postal-code").type(data.zipcode);
    cy.get("input#continue").click();
});