Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

//test case for signup
describe('Signup into the application', () => {
    it('should allow user to Registering into the system', () => {
        cy.visit('https://demo.guru99.com/insurance/v1/index.php')
        cy.get("a[class='btn btn-default']").click()
        cy.wait(2000)
        cy.get('#user_title').select('General').should('have.value', 'General')

        //input field
        cy.get("#user_firstname").type("niraj")
        cy.get("#user_surname").type("kharbuja")
        cy.get("#user_phone").type("+9779866297491")

        //Date of birth- drop down
        cy.get("#user_dateofbirth_1i").select("1995")
        cy.get("#user_dateofbirth_2i").select("May")
        cy.get("#user_dateofbirth_3i").select("8")

        //radio button
        cy.get("#licencetype_f").check("Provisional")

        //combo box
        cy.get("#user_licenceperiod").select("3")
        cy.get("#user_occupation_id").select("Engineer").should('have.value', '12')

        //input field
        cy.get("#user_address_attributes_street").type("Bhaktapur")
        cy.get("#user_address_attributes_city").type("Kathmandu")
        cy.get("#user_address_attributes_county").type("Nepal")
        cy.get("#user_address_attributes_postcode").type("123456")
        cy.get("#user_user_detail_attributes_email").type("Testingtester@yopmail.com")
        cy.get("#user_user_detail_attributes_password").type("Testing@123")
        cy.get("#user_user_detail_attributes_password_confirmation").type("Testing@123")
        cy.wait(5000)

        //create button
        cy.get("input[value='Create']").click()
        cy.url().should("include", "/index.php").log("User Successfully Registered")
    })
})
