// <reference types="cypress" />
describe("teste", () => {
    before(() => {
      cy.visit('/');
      cy.login();
    });
    it("add to cart", () => {
      for (let i = 0; i < 3; i++) {
        cy.get(".btn_primary").eq(i).click();
      }
      cy.get(".shopping_cart_link").click();
      cy.get('[data-test="inventory-item-name"]')
        .contains("Sauce Labs Backpack")
        .should("be.visible");
      cy.get("button#checkout").click();
      cy.get('[data-test="title"]').should("be.visible");
      cy.information();
      cy.get('[data-test="title"]').should("have.text", "Checkout: Overview");
      cy.get('[data-test="finish"]').click();
      cy.get('[data-test="complete-header"]').should(
        "have.text",
        "Thank you for your order!"
      );
    });
  });