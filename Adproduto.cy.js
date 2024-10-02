/// <reference types="cypress" />

// Teste adicionar produto ao carrinho
describe('Adicionar Produto' , () => {

    it('Adicionar' , function () {
        cy. visit ("https://www.saucedemo.com/")
        // ele faz o visit -> visita o website
        cy.get('[data-test="username"]').click().type('standard_user');
        // Depois acha o campo do usuário -> clica no campo -> digita o usuario
        cy.get('[data-test="password"]').click().type('secret_sauce')
        // Clica no campo da senha -> digita a senha
        cy.get('[data-test="login-button"]').click();
        //Clica no campo do login -> e a pagina loga - alguns site não loga por motivos de segurança
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
       
    
    });
    });

