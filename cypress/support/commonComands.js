/// <reference types="cypress" />

Cypress.Commands.add('navigate', 
    (route) => {
        cy.intercept(route).as('loadpage')
        cy.visit(route, { timeout: 30000 })
        cy.wait('@loadpage')
    }
)