/// <reference types="cypress" />

describe('Articles', () => {
    it('Cadastro de novo artigo com sucesso', () => {
        cy.visit('login')
        cy.get('[placeholder="Email"]').type('te@test.com')
        cy.get('[placeholder="Password"]').type('123456')
        cy.get('button.btn-primary').click()

        cy.contains('New Article').click()

        const articleName = 'Artigo de Teste' + new Date().getTime()

        cy.get('[ng-model$=title]').type(articleName)
        cy.get('[ng-model$=description]').type('Automation Cypress')
        cy.get('[ng-model$=body]').type('Lorem Test Automation Cypress')
        cy.get('[ng-model$=tagField]').type('Cypress')

        cy.contains('button', 'Publish Article').click()
        
        cy.contains(articleName).should('be.visible')
        cy.get('h1').should('have.text', articleName)
    });
});