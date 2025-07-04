describe('Testes de login', () => {
  it('Criação da conta e acesso', () => {
    cy.visit('localhost:3000')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Isabella')
    cy.get('#lastName').type('Oliveira')
    cy.get('#username').type('Isabella')
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('123456')
    cy.get('[data-test="signup-submit"]').click()
    cy.get('#username').type('Isabella')
    cy.get('#password').type('123456')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="user-onboarding-dialog-title"]')
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('#bankaccount-bankName-input').type('Banco 01')
    cy.get('#bankaccount-routingNumber-input').type('123456789')
    cy.get('#bankaccount-accountNumber-input').type('123456789')
    cy.get('[data-test="bankaccount-submit"]').click()
    cy.get('[data-test="user-onboarding-dialog-title"]')
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('[data-test="nav-public-tab"]')
    cy.get('[data-test="nav-contacts-tab"]')
    cy.get('[data-test="nav-personal-tab"]')
  })
})