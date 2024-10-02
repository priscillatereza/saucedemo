/// <reference types="cypress" />

// cenario de login sem sucesso
describe('Login errado' , () => {
    it('login' , () => {
        cy. visit ("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').click().type('standard_user');
        cy.get('[data-test="password"]').click().type('secret_sauce1')
        cy.get('[data-test="login-button"]').click();
       
    
       

    });
    });