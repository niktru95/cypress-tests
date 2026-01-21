import BasePage from "./basePage";


class LoginPage extends BasePage {
  fillUsername(selector, username) {
    cy.getElement(selector).type(username);
  }

  fillPassword(selector, password) {
    cy.getElement(selector).type(password);
  }
}

export default LoginPage;
