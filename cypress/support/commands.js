Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function() {
    cy.get('#firstName').type('Jorge')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('catatau.jorginho@gmail.com')
    cy.get('#open-text-area').type('comando customizado')
    cy.get('button[type="submit"]').click()

})