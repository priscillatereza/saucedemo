/// <reference types="cypress" />

// cenario de login com sucesso
describe('Fazendo Login' , () => {
it('login' , () => {
    cy. visit ("https://www.saucedemo.com/")
    // ele faz o visit -> visita o website
    cy.get('[data-test="username"]').click().type('standard_user');
    // Depois acha o campo do usuário -> clica no campo -> digita o usuario
    cy.get('[data-test="password"]').click().type('secret_sauce')
    // Clica no campo da senha -> digita a senha
    cy.get('[data-test="login-button"]').click();
    //Clica no campo do login -> e a pagina loga - alguns site não loga por motivos de segurança

   

});
});