/// <reference types="cypress" />

const SEARCH = {
    icon: '[class="ast-search-icon"]',
    field: '[id="search-field"]',
    title: '[class="page-title ast-archive-title"]',
    results: '[class="entry-title ast-blog-single-element"]',
    resultsError: '[class="page-content"]'

}

Cypress.Commands.add('searchField', (pass) => {
    cy.get(SEARCH.icon).click()
    cy.wait(1000)
    cy.get(SEARCH.field).type(`${pass} {enter}`)
})

Cypress.Commands.add('validateTitle', (text) => {
    cy.get(SEARCH.title).should('contain.text', `${text}`)
})

Cypress.Commands.add('validateResults', (text) => {
        cy.get(SEARCH.results).should('contain.text', `${text}`)
})

Cypress.Commands.add('validateError', (text) => {
    cy.get(SEARCH.resultsError).should('contain.text', `${text}`)
    cy.get(SEARCH.field).should('exist')
})


export { SEARCH }