import { faker } from '@faker-js/faker';
import ListaUsuarioPage from '../support/pages/listarUsuarios.page';


describe('Teste de listar Usuario', () => {

    var paginaListarUsuario = new ListaUsuarioPage();
    beforeEach(() => { 
      cy.visit('/users')
    })
     
    it('Deve verificar se existe um link para cadastrar novo usuario', function () {
        cy.contains(paginaListarUsuario.linkNovo, 'Novo').should('be.visible');
      })
    


      it('Verifica se lista de usuario nao esta vazia', function () {
       
          paginaListarUsuario.buscaBotaoVoltar().then((x) => {
            if (x.is("enabled")) {
              paginaListarUsuario.clicarAnterior();
              paginaListarUsuario.buscaQuadroUsuario().should('be.visible')
            } else {
              paginaListarUsuario.buscaQuadroUsuario().should('be.visible')
              paginaListarUsuario.clicarProximo();
              
            }

    });


  })

 describe('Testes de lista de usuario vazia', function(){
			it('teste lista vazia', function() {
        paginaListarUsuario.buscaListaVazia();
			
    });
    
})

})