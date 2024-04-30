export default class CadastroPage {
    nome = '#name';
    email = '#email';
    botaoCadastrar = 'button[type="submit"]';
  
    linkVoltar = '[href="/users"]';
    linkPaginaHome = '[href="/"]';

    mensagemNomeObrigatorio = 'span.sc-cPiKLX.feFrSQ'
    mensagemEmailObrigatorio = 'span.sc-cPiKLX.feFrSQ'
    mensagemEmailInvalido = 'span.sc-cPiKLX.feFrSQ'
    mensagemEmailJaExistente = 'div.sc-dCFHLb.lmTxRO' 

    botaoCancelarMensagemAlerta = 'button.sc-lcIPJg.ifkIA-D'
    botaoConfirmarMensagemAlerta = 'button.sc-lcIPJg.eIYdvr'
   

    digitarNome(nome) {
      cy.get(this.nome).type(nome);
    }
  
    digitarEmail(email) {
      cy.get(this.email).type(email);
    }
  
    clicarBotaoCadastrar() {
      cy.get(this.botaoCadastrar).click();
    }
  
    clicarPaginaHome() {
        cy.get(this.linkPaginaHome).click();
      }

    clicarLinkVoltar() {
        cy.get(this.linkVoltar).click();
      }

    cadastrar(nome, email) {
      this.digitarNome(nome);
      this.digitarEmail(email);
      this.clicarBotaoCadastrar();
    }

    validarmensagemNomeObrigatorio(){
      cy.contains(this.mensagemNomeObrigatorio, 'O campo nome é obrigatório.').should('be.visible');
    }
    
    validarmensagemEmailObrigatorio(){
      cy.contains(this.mensagemEmailObrigatorio, 'O campo e-mail é obrigatório.').should('be.visible');
    }
    validarmensagemEmailInvalido(){
      cy.contains(this.mensagemEmailInvalido, 'Formato de e-mail inválido').should('be.visible');
    }
    validarmensagemEmailMais60Caracteres(){
      cy.contains(this.mensagemEmailInvalido, 'Informe no máximo 60 caracteres para o e-mail').should('be.visible');
    }
    validarmensagemNomeMais100Caracteres(){
      cy.contains(this.mensagemNomeObrigatorio, 'Informe no máximo 100 caracteres para o nome').should('be.visible');
    }
    validarmensagemEmailJaExistente(){
      cy.contains(this.mensagemEmailJaExistente, 'Este e-mail já é utilizado por outro usuário.').should('be.visible');
    }
     clicarbotaoCancelarMensagemAlerta() {
      cy.get(this.botaoCancelarMensagemAlerta).click();
    } 
    limparCampos() {
      cy.get('#name').clear();
      cy.get('#email').clear();
    }
       
  }