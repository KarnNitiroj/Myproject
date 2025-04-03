import { type Locator, type Page, expect } from "@playwright/test";

export class SignupAndLoginPage {
  readonly page: Page;
  readonly titleSignup: Locator;
  readonly signupTextFieldName: Locator;
  readonly signupTextFieldEmail: Locator;
  readonly signupButton: Locator;
  readonly titleLogin: Locator;
  readonly loginTextFieldEmail: Locator;
  readonly loginTextFieldPassword: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleSignup = page.locator("div[class='signup-form'] h2");
    this.signupTextFieldName = page.getByPlaceholder("Name");
    this.signupTextFieldEmail = page.locator("input[data-qa='signup-email']");
    this.signupButton = page.locator("button[data-qa='signup-button']");
    this.titleLogin = page.locator("div[class='login-form'] h2");
    this.loginTextFieldEmail = page.locator("input[data-qa='login-email']");
    this.loginTextFieldPassword = page.getByPlaceholder("Password");
    this.loginButton = page.locator("button[data-qa='login-button']");
  }

  async verifyNewUserSignupIsVisible() {
    await expect(this.titleSignup).toBeVisible();
  }
  async inputNameInSignupTextFieldName (name: string) {
    expect (this.signupTextFieldName).toBeVisible();
    await this.signupTextFieldName.fill(name);
  }
  async inputEmailInSignupTextFieldEmail(email: string) {
    expect (this.signupTextFieldEmail).toBeVisible();
    await this.signupTextFieldEmail.fill(email);
  }
  async clickSignupButton() {
    await this.signupButton.click();
  }
  async verifyLoginToYourAccountIsVisible() {
    await expect(this.titleLogin).toBeVisible();
  }
  async fillLoginTextFieldEmail(email: string) {
    await this.loginTextFieldEmail.fill(email);
  }
  async fillLoginTextFieldPassword(password: string) {
    await this.loginTextFieldPassword.fill(password);
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }
}
