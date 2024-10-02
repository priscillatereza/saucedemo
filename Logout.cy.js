
// Efetuar o logout do sistema
describe('Logout' , () => {

    it('Logout' , function () {
        cy. visit ("https://www.saucedemo.com/")
        // ele faz o visit -> visita o website
        cy.get('[data-test="username"]').click().type('standard_user');
        // Depois acha o campo do usuário -> clica no campo -> digita o usuario
        cy.get('[data-test="password"]').click().type('secret_sauce')
        // Clica no campo da senha -> digita a senha
        cy.get('[data-test="login-button"]').click();
        //Clica no campo do login -> e a pagina loga - alguns site não loga por motivos de segurança
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar').click();
        //cy.wait(5000); // Espera 5 segundos
        cy.scrollTo('top'); // rolar para o topo da pagina
       // get('button').click({ force: true }); // Forçar o clique no link de logout, mesmo se estiver oculto
        cy.get('bm-burger-button').click(); // Clicar no ícone do menu hambúrguer
        //cy.wait(5000); // Espera 5 segundos
        cy.get('[data-test="logout-sidebar-link').click(); // Clica no botão após a espera
    });
});   
       
