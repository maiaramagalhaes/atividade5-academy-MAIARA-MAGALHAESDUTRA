import { faker } from '@faker-js/faker';
import CadastroPage from '../support/pages/cadastroUsuario.page';
import PesquisaUsuarioPage from '../support/pages/pesquisaUsuario.page';


describe('Teste de criar usuario', () => {
    var paginaCadastro = new CadastroPage();
    var paginaPesquisaUsuario = new PesquisaUsuarioPage();

    beforeEach(() => { 
      cy.visit('users/novo')
    })

    it('Deve verificar se existe um link para voltar', function () {
      cy.contains(paginaCadastro.linkVoltar, 'Voltar').should('be.visible');
    });

    it('Deve verificar se existe um link para home', function () {
      cy.get(paginaCadastro.linkPaginaHome).should('be.visible');
    });

    it('Não deve ser possível cadastrar o usuário sem informar um nome', function () {
      paginaCadastro.digitarEmail('maiara@raro.com.br');
      paginaCadastro.clicarBotaoCadastrar();
      paginaCadastro.validarmensagemNomeObrigatorio();
    });

    it('Não deve ser possível cadastrar o usuário sem informar um email', function () {
      var nome = faker.person.fullName();
      paginaCadastro.digitarNome(nome);
      paginaCadastro.clicarBotaoCadastrar();
      paginaCadastro.validarmensagemEmailObrigatorio();
      paginaCadastro.limparCampos();

    }); 
    it('Não deve ser possível cadastrar o usuário com um email invalido', function () {
      var nome = faker.person.fullName();
      paginaCadastro.digitarNome(nome);
      paginaCadastro.digitarEmail('teste.com');
      paginaCadastro.clicarBotaoCadastrar();
      paginaCadastro.validarmensagemEmailInvalido();
    }); 

    it('Não deve ser possível cadastrar o usuário com um email contendo mais de 60 caracteres', function () {
      var nome = faker.person.fullName();
      paginaCadastro.digitarNome(nome);
      paginaCadastro.digitarEmail('emailcommaisde60caracteresmdmdmdmdmdmdmdmdmdmdmdmd@raro.com.br');
      paginaCadastro.clicarBotaoCadastrar();
      paginaCadastro.validarmensagemEmailMais60Caracteres();
      paginaCadastro.limparCampos();
    });
    it('Não deve ser possível cadastrar o usuário com um nome contendo mais de 100 caracteres', function () {
      paginaCadastro.digitarNome('Joaquim Jose da Silva Xavirer Costa Brandao Bueno Cavalcante Teixeira Santos Sobrinho Dantes Costa Neto');
      paginaCadastro.digitarEmail('maiara31@raro.com.br');
      paginaCadastro.clicarBotaoCadastrar();
      paginaCadastro.validarmensagemNomeMais100Caracteres();
      paginaCadastro.limparCampos();
      });
      it('Deve ser possivel cadastrar um usuario', function (){
              
          var nome5 = faker.person.fullName();;
          var email5 = faker.internet.email();

          paginaCadastro.cadastrar(nome5, email5)
          cy.contains("Usuário salvo com sucesso").should("be.visible");
          paginaCadastro.clicarPaginaHome();
          paginaPesquisaUsuario.digitarValorPesquisa(nome5);
          cy.wait(500);
          paginaPesquisaUsuario.deletarUsuario();
      })  

  })

describe('Teste com interception', function () {
    
  
  it('Não deve ser possível cadastrar um usuário com um email ja cadastrado - intercept', function (){
     
    var paginaCadastro = new CadastroPage();
    var paginaPesquisaUsuario = new PesquisaUsuarioPage();
    
    cy.intercept('POST','rarocrud-80bf38b38f1f.herokuapp.com/api/v1',{
        statusCode:422,
        failOnStatusCode: false
      }).as('postError')

      var nome3 = faker.person.fullName();;
      var email3 = 'maiara2@raro.com.br';
      
      cy.visit('users/novo')
      paginaCadastro.cadastrar(nome3,email3);
      //cy.wait(4000)
      paginaCadastro.validarmensagemEmailJaExistente();
      paginaCadastro.clicarbotaoCancelarMensagemAlerta();
    }) 

})
