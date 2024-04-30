export default class ListaUsuarioPage {

PaginaHome = '#root > div.sc-aXZVg.iYVcAu > div > a:nth-child(1)'

linkNovo = '[href="/users/novo"]'

listaUsuario = '#listaUsuarios'
mensagemListaVazia ='#root > div.sc-jsJBEP.dwkAfe > div > div > h3'

linkAnterior = '#paginacaoVoltar'
linkProximo = '#paginacaoProximo'

frameUsuario = '#userData'


clicarPaginaHome(){
    cy.get(this.PaginaHome).click();
  }

clicarLinkNovo(){
    cy.get(this.linkNovo).click();
  }

buscaListaUsuario(){
    cy.get(this.listaUsuario)

}

buscaListaVazia(){
  cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users', []).
  as('lista')
  cy.contains('Ops! Não existe nenhum usuário para ser exibido.').should('be.visible')
  cy.contains("Cadastre um novo usuário").should("be.visible");

}
clicarAnterior(){
  cy.get(this.linkAnterior).click();
}

clicarProximo(){
  cy.get(this.linkProximo).click();
}

buscaQuadroUsuario(){
  return (cy.get(this.frameUsuario))
}

buscaBotaoVoltar(){
  return (cy.get(this.linkAnterior ))

}

}