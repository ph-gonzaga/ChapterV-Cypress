const articleName = 'Artigo de Teste' + new Date().getTime()

const el = require('./elements').EL

class Articles {
  acessForm () {
    cy.contains('New Article').click()
  }

  fillFieldForm () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Automation Cypress')
    cy.get(el.inputBody).type('Lorem Test Automation Cypress')
    cy.get(el.inputTags).type('Cypress')
  }

  submitForm () {
    cy.contains('button', 'Publish Article').click()
  }

  verifyCreateForm () {
    cy.contains(articleName).should('be.visible')
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
