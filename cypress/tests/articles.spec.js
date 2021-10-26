/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {
  // Hooks
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('Cadastro de novo artigo com sucesso', () => {
    articles.acessForm()
    articles.fillFieldForm()
    articles.submitForm()
    articles.verifyCreateForm()
  })
})
