/// <reference types="cypress" />

describe('Pesquisa', () => {

    context('Realizar pesquisa com sucesso', () => {

        const itemCartoes = 'Cartões'
        const itemEmprestimos = 'Empréstimos'
        const itemResultadosEncontradosPara = 'Resultados encontrados para:'

        it('Realizar pesquisa por empréstimos e validar titulo e resultados de sucesso', () => {
            cy.navigate('/')
            cy.searchField(itemEmprestimos)
            cy.validateTitle(itemResultadosEncontradosPara)
            cy.validateTitle(itemEmprestimos)
            cy.validateResults('Representante Legal pode fazer Empréstimo Consignado?')
            cy.validateResults('Como Funciona a Portabilidade de Empréstimo Consignado?')
            cy.validateResults('Empréstimo com garantia: saiba como funciona a modalidade')
        })

        it('Realizar pesquisa por cartões e validar titulo e resultados de sucesso', () => {
            cy.navigate('/')
            cy.searchField(itemCartoes)
            cy.validateTitle(itemResultadosEncontradosPara)
            cy.validateTitle(itemCartoes)
            cy.validateResults('Cartão Virtual: o que é e como usar')
            cy.validateResults('O que é Anuidade do Cartão de Crédito?')
            cy.validateResults('Estorno cartão de crédito: como funciona e quanto tempo demora')
        })
    })

    context('Realizar pesquisa com falha', () => {

        const itemTextoErrado = 'textoErrado'
        const itemResultadosEncontradosPara = 'Resultados encontrados para:'

        it('Realizar pesquisa por um texto que não tenha resultado', () => {
            cy.navigate('/')
            cy.searchField(itemTextoErrado)
            cy.validateTitle(itemResultadosEncontradosPara)
            cy.validateTitle(itemTextoErrado)
            cy.validateError('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
        })
    })
})