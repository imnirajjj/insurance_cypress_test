describe('Login Failure', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
  });


  it('Login with valid email with empty password field', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.get('#email').type("hello@yopmail.com");
    cy.get("input[value='Log in']").click();
    cy.contains('Enter your Email address and password correct').should('be.visible').log('Unable to login with invalid empty password field');
    cy.wait(2000);
  });

  it('Login with valid passowrd with empty email field', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.get('#password').type("Testing@123");
    cy.get("input[value='Log in']").click();
    cy.contains('Enter your Email address and password correct').should('be.visible').log('Unable to login with empty email field');
    cy.wait(2000);
  });

  it('Login with Invalid email', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.get('#email').type("h.com");
    cy.get('#password').type("Testing@123");
    cy.get("input[value='Log in']").click();
    cy.contains('Enter your Email address and password correct').should('be.visible').log('Unable to login with invalid email');
    cy.wait(2000);
  });

  it('Login with Invalid passowrd', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.get('#email').type("Testingtester@yopmail.com");
    cy.get('#password').type("123456");
    cy.get("input[value='Log in']").click();
    cy.contains('Enter your Email address and password correct').should('be.visible').log('Unable to login with invalid Password');
    cy.wait(2000);
  });


  it('Login without credentails', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    cy.get('input[name="submit"]').click();
    cy.url().should('include', '/index.php').log("Test Case Failed")
  });
});

