import { faker } from '@faker-js/faker';
import CadastroPage from '../support/pages/cadastroUsuario.page';
import PesquisaPage from '../support/pages/pesquisaUsuario.page';
import { afterEach } from 'mocha';

describe('Teste de pesquisar usuario', () => {
    var pesquisaUsuario = new PesquisaPage();
    var paginaCadastro = new CadastroPage();
    
    let nome;
    let email;
    let idUsuario;
    
    beforeEach(() => { 
      cy.visit('users/novo')
       
      nome = faker.person.fullName();
      email = faker.internet.email();
      email = email.toLowerCase();

      paginaCadastro.cadastrar(nome, email)
      cy.contains("Usuário salvo com sucesso").should("be.visible")
      cy.visit('/');
 
   })
       it('Deve ser possivel pesquisar usuario por nome', function (){
        pesquisaUsuario.digitarValorPesquisa(nome);
        pesquisaUsuario.compararNomeUsuario(nome);

     })
   

     it('Deve ser possivel pesquisar usuario por email', function (){
        pesquisaUsuario.digitarValorPesquisa(email);
        cy.contains('E-mail:').should('be.visible');
        
     }) 

     it ('Deve ser possivel visualizar dados do usuario', function (){
       pesquisaUsuario.digitarValorPesquisa(nome);
       pesquisaUsuario.visualizarDetalhesUsuario();
       cy.contains('id').should('be.visible');
       cy.contains('Nome').should('be.visible');
       cy.contains('E-mail').should('be.visible');
       pesquisaUsuario.clicarPaginaHome();
    })

 })

 describe('Testes de pesquisar usuario sem sucesso ', () => {
   var pesquisaUsuario = new PesquisaPage();

   before(() => {
      cy.visit('')
    })
    it('Deve ser possivel pesquisar usuario inexistente', function (){
         var nomeinvalido = 'xxxxxxxxxxx'
         pesquisaUsuario.digitarValorPesquisa(nomeinvalido);
         pesquisaUsuario.comparaMensagemUsurioInvalido();
         pesquisaUsuario.comparaLinkCadastrarNovoUSuario();
         
   })
})   
   