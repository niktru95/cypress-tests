class BasePage {
  submit(selector) {
    cy.get(selector).click();
  }

  checkUrl(url) {
    cy.url().should("include", url);
  }

  visit(url) {
    cy.visit(url);
  }

  checkWarningText(selector, text) {
    cy.get(selector).should("contain", text);
  }

  checkWarningText2(selector, text) {
    cy.get(selector).should("contain", text);
  }
}
export default BasePage;
