
import '../support/commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

// Test case for requesting a new quotation
describe('Request Quotation', () => {
  it('should allow the user to request a new quotation', () => {
    cy.login();
    cy.wait(2000)
    cy.contains('Request Quotation').click();
    cy.wait(3000)
    cy.get("#quotation_breakdowncover").select("European").should('have.value','4')
    cy.get('#quotation_windscreenrepair_t').check()
    cy.get("#quotation_incidents").type("Big Incident")
    cy.get("#quotation_vehicle_attributes_registration").type("A12345")
    cy.get("#quotation_vehicle_attributes_mileage").type("ABCDEF")
    cy.get("#quotation_vehicle_attributes_value").type("1000")
    cy.get("#quotation_vehicle_attributes_parkinglocation").select("Public Place").should("have.value","Public place")
    cy.get("#quotation_vehicle_attributes_policystart_1i").select("2024")
    cy.get("#quotation_vehicle_attributes_policystart_2i").select("September")
    cy.get("#quotation_vehicle_attributes_policystart_3i").select("25")
    cy.wait(5000)
    cy.get("input[value='Save Quotation']").click()
    cy.url().should("include", "/new_quotation.php").log("Quotation Requested Successfully")
  });
});

  