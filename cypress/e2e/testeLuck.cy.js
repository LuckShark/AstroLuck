describe('Teste Técnico Astro - Login e Compras', () => {
it('Login', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');

    
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    cy.get('[data-test="shopping-cart-badge"]')


    });
});
