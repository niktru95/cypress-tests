import BasePage from "./basePage";

class loginPage extends BasePage {
  fillUsername(selector, username) {
    cy.get(selector).type(username);
  }

  fillPassword(selector, password) {
    cy.get(selector).type(password);
  }
}

export default loginPage;
