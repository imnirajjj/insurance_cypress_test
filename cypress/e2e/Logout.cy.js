import'../support/commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

describe('Logout', () =>{
    it('shoulld be able to Logout of the system', () =>{
        cy.login()
        cy.visit("https://demo.guru99.com/insurance/v1/header.php")
        cy.wait(5000)
        cy.get("input[value='Log out']").click()
        cy.url().should("include", "index.php").log("Logout Successfully")
    });
});