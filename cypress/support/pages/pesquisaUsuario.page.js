export default class PesquisaPage {
      
    linkVoltar = '[href="/users"]';
    linkPaginaHome = '[href="/"]';

    campoPesquisarUsuario = 'input.sc-gsFSXq.mUpIH'
    botaoLimparPesquisa = 'svg.sc-KAyceB.cFrQvb.path#root > div.sc-aXZVg.iYVcAu > div > div > div:nth-child(3) > svg > path'
    botaoProximaPagina = '#paginacaoProximo'
    botaoPaginaAnterior = '#paginacaoVoltar'
   
    quadradoUsuario = '#userData'
    textoNomeUsuario = '#userData > div.sc-dAbbOL.lcgSvJ > p:nth-child(1)'
    textoEmailUsuario = '#userData > div.sc-dAbbOL.lcgSvJ > p:nth-child(2)'

    mensagemUsuarioInvalido ='#root > div.sc-jsJBEP.dwkAfe > div > div > h3'
    linkCadatroNovoUsuario = '#root > div.sc-jsJBEP.dwkAfe > div > div > a > p'

    botaoCancelarMensagemAlerta = 'button.sc-lcIPJg.ifkIA-D'
    botaoConfirmarMensagemAlerta = 'button.sc-lcIPJg.eIYdvr'
    
    botaoDeletarUsuario = 'button.sc-fUnMCh.dttKkA'

    botaoVerDetalhes = '.sc-hzhJZQ.cShbuI'
    idUsuario = '.sc-dLMFU.Mcjyi' 

    digitarValorPesquisa(texto) {
        cy.get(this.campoPesquisarUsuario).type(texto);
      }
    
    limparValorPesquisa() {
        cy.get(this.botaoLimparPesquisa).click();
      }  
    compararNomeUsuario(nome) {
      cy.get(this.textoNomeUsuario).invoke('text').should('contain', nome)  
      
    }

    compararEmailUsuario(email) {
      
        cy.get(this.textoEmailUsuario).invoke('text').should('contain', email)  
      
    }
    comparaMensagemUsurioInvalido(){
      cy.get(this.mensagemUsuarioInvalido).invoke('text').should('equal', 'Ops! Não existe nenhum usuário para ser exibido.');  
    } 
    comparaLinkCadastrarNovoUSuario(){
      cy.get(this.linkCadatroNovoUsuario).invoke('text').should('equal', 'Cadastre um novo usuário');
     }
    
    deletarUsuario(){
      
      cy.get(this.botaoDeletarUsuario).click();
      cy.get(this.botaoConfirmarMensagemAlerta).click();

    }

      visualizarDetalhesUsuario(){
      cy.get(this.quadradoUsuario).click();
      cy.get(this.botaoVerDetalhes).click();
    }

     clicarPaginaHome(){
      cy.get(this.linkPaginaHome).click();
     } 
 }