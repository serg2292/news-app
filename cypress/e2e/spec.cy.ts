/// <reference types="cypress" />

describe('App E2E', () => {
  it('Should have a header', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Привет, Гость!')
  })

  it('Should search a news', () => {
    cy.visit('/news');

    cy.get('input[placeholder="Поиск новости"]').type('Автопарк').should('have.value', 'Автопарк')
    cy.get('td').should('have.length', 2)

    cy.get('input[placeholder="Поиск новости"]').clear()
    cy.get('td').should('have.length', 20)
  })

})