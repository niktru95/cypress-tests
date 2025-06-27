import { warningsText } from "../../enum";
import loginPageClass from "../pages/loginPage";
import { selectors } from "../../selectors"

const username = Cypress.env("username");
const password = Cypress.env("password");

describe("Проверки на странице авторизации", () => {
  let loginPage;

  beforeEach(() => {
    loginPage = new loginPageClass();
    loginPage.visit("/");
  });

  it("Успешная аутентификация", () => {
    loginPage.fillUsername(selectors.username, username);
    loginPage.fillPassword(selectors.password, password);
    loginPage.submit(selectors.loginButton);
    loginPage.checkUrl("/inventory.html");
  });

  it("Попытка аутентификации с неверным паролем", () => {
    loginPage.fillUsername(selectors.username, username);
    loginPage.fillPassword(selectors.password, "incorrect_password");
    loginPage.submit(selectors.loginButton);
    loginPage.checkWarningText(
      selectors.warningsElement,
      warningsText.loginWarning
    );
  });

  it("Попытка аутентификации с неверным именем пользователя", () => {
    loginPage.fillUsername(selectors.username, "incorrect_username");
    loginPage.fillPassword(selectors.password, password);
    loginPage.submit(selectors.loginButton);
    loginPage.checkWarningText(
      selectors.warningsElement,
      warningsText.loginWarning
    );
  });
});
