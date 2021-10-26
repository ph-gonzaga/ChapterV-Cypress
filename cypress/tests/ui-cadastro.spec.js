/// <reference types="cypress" />

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 200,
      fixture: 'cadastro'
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder="Username"]').type('ChapterV1215')
    cy.get('[placeholder="Email"]').type('te@test.com')
    cy.get('[placeholder="Password"]').type('123456')
    cy.get('button.btn-primary').click()

    cy.contains('Loading articles...').should('be.visible')
  })
  it('Usuario existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 422,
      fixture: 'cadastro-usuario-existente'
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder="Username"]').type('ChapterV1215')
    cy.get('[placeholder="Email"]').type('te@test.com')
    cy.get('[placeholder="Password"]').type('123456')
    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
    cy.contains('email has already been taken').should('be.visible')
  })
})
