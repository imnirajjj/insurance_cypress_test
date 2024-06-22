import '../support/commands'


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

describe('Retrieve Quotation', () =>{
    it('should able to retrive quotation', () =>{
        cy.login()
        cy.contains("Retrieve Quotation").click()
        cy.get("input[placeholder='identification number']").type("36547")
        cy.wait(5000)
        cy.get("#getquote").click()
        cy.url().should("include", "/retrieve_quotation.php").log("Quotation Retrieve Successfully")

    })
})