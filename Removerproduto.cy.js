// Excluir produto do carrinho
describe('Remover Produto' , () => {

    it('Remover' , function () {
        cy. visit ("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').click().type('standard_user');
        cy.get('[data-test="password"]').click().type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').click();
        cy.get('[data-test="cart-list"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="continue-shopping"]').click();


    });
});
