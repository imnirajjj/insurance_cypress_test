// cypress/support/index.js
Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    if (err.message.includes('validateLogin is not defined')) {
      return false;
    }
    // Return true if you want Cypress to throw the error
    return true;
  });
  

describe('Loginto Application',() =>{
    it('should allow user to loginto the application', () =>{
        cy.visit('https://demo.guru99.com/insurance/v1/index.php')
        cy.get("#email").type("Testingtester@yopmail.com")
        cy.get("#password").type("Testing@123")
        cy.get("input[value='Log in']").click()
        cy.url().should("include", "/header.php").log("Login Successfull")
    });
});