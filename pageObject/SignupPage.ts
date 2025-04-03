import { type Locator, type Page, expect } from "@playwright/test";

export class SignupPage {
  readonly page: Page;
  readonly titleAccountInformation: Locator;
  readonly textFieldName: Locator;
  readonly textFieldEmail: Locator;
  readonly textFieldPassword: Locator;
  readonly titleDateOfBirth: Locator;
  readonly dropDownDay: Locator;
  readonly dropDownMonth: Locator;
  readonly dropDownYear: Locator;
  readonly checkBoxNewsletter: Locator;
  readonly checkBoxReceiveOffers: Locator;
  readonly titleAddressInformation: Locator;
  readonly txetfieldFirstName: Locator;
  readonly textFieldLastName: Locator;
  readonly textFieldCompany: Locator;
  readonly textFieldAddress1: Locator;
  readonly textFieldAddress2: Locator;
  readonly dropDownCountry: Locator;
  readonly textFieldState: Locator;
  readonly textFieldCity: Locator;
  readonly textFieldZipCode: Locator;
  readonly textFieldMobileNumber: Locator;
  readonly createAccountButton: Locator;
  readonly titleAccountCreated: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleAccountInformation = page.getByText("Enter Account Information");
    this.textFieldName = page.locator("#name");
    this.textFieldEmail = page.locator("#email");
    this.textFieldPassword = page.locator("#password");
    this.titleDateOfBirth = page.getByLabel("Date of Birth");
    this.dropDownDay = page.locator("#days");
    this.dropDownMonth = page.locator("#months");
    this.dropDownYear = page.locator("#years");
    this.checkBoxNewsletter = page.locator("#newsletter");
    this.checkBoxReceiveOffers = page.locator("#optin");
    this.titleAddressInformation = page.getByText("Address Information");
    this.txetfieldFirstName = page.locator("#first_name");
    this.textFieldLastName = page.locator("#last_name");
    this.textFieldCompany = page.locator("#company");
    this.textFieldAddress1 = page.locator("#address1");
    this.textFieldAddress2 = page.locator("#address2");
    this.dropDownCountry = page.locator("#country");
    this.textFieldState = page.locator("#state");
    this.textFieldCity = page.locator("#city");
    this.textFieldZipCode = page.locator("#zipcode");
    this.textFieldMobileNumber = page.locator("#mobile_number");
    this.createAccountButton = page.locator("button[data-qa='create-account']");
    this.titleAccountCreated = page.getByText("Account Created!");
    this.continueButton = page.locator(".btn.btn-primary");
  }

  async selectTitle(title: string) {
    await this.page.click(`text=${title}.`);
  }
  async verifyAccountInformationIsVisible() {
    await expect(this.titleAccountInformation).toBeVisible();
  }
  async verifyNameInTextFieldName(name: string) {
    expect(this.textFieldName).toBeVisible();
    expect(this.textFieldName).toHaveValue(name);
  }
  async verifyEmailInTextFieldEmail(email: string) {
    expect(this.textFieldEmail).toBeVisible();
    expect(this.textFieldEmail).toHaveValue(email);
  }
  async inputPasswordInTextFieldPassword(password: string) {
    expect(this.textFieldPassword).toBeVisible();
    await this.textFieldPassword.fill(password);
  }
  async selectDateOfBirth(day: string, month: string, year: string) {
    await this.dropDownDay.selectOption(day);
    await this.dropDownMonth.selectOption(month);
    await this.dropDownYear.selectOption(year);
  }
  async clickCheckBoxNewsletter() {
    expect(this.checkBoxNewsletter).toBeVisible();
    await this.checkBoxNewsletter.check();
  }
  async clickCheckBoxReceiveOffers() {
    expect(this.checkBoxReceiveOffers).toBeVisible();
    await this.checkBoxReceiveOffers.check();
  }
  async verifyTitleAddressInformationIsVisible() {
    await expect(this.titleAddressInformation).toBeVisible();
  }
  async inputFirstNameInTextFieldFirstName(firstName: string) {
    expect(this.txetfieldFirstName).toBeVisible();
    await this.txetfieldFirstName.fill(firstName);
  }
  async inputLastNameInTextFieldLastName(lastName: string) {
    expect(this.textFieldLastName).toBeVisible();
    await this.textFieldLastName.fill(lastName);
  }
  async inputCompanyInTextFieldCompany(company: string) {
    expect(this.textFieldCompany).toBeVisible();
    await this.textFieldCompany.fill(company);
  }
  async inputAddress1InTextFieldAddress1(address1: string) {
    expect(this.textFieldAddress1).toBeVisible();
    await this.textFieldAddress1.fill(address1);
  }
  async inputAddress2InTextFieldAddress2(address2: string) {
    expect(this.textFieldAddress2).toBeVisible();
    await this.textFieldAddress2.fill(address2);
  }
  async selectCountryInDropDownCountry(country: string) {
    expect(this.dropDownCountry).toBeVisible();
    await this.dropDownCountry.selectOption(country);
  }
  async inputStateInTextFieldState(state: string) {
    expect(this.textFieldState).toBeVisible();
    await this.textFieldState.fill(state);
  }
  async inputCityInTextFieldCity(city: string) {
    expect(this.textFieldCity).toBeVisible();
    await this.textFieldCity.fill(city);
  }
  async inputZipCodeInTextFieldZipCode(zipCode: string) {
    expect(this.textFieldZipCode).toBeVisible();
    await this.textFieldZipCode.fill(zipCode);
  }
  async inputMobileNumberInTextFieldMobileNumber(mobileNumber: string) {
    expect(this.textFieldMobileNumber).toBeVisible();
    await this.textFieldMobileNumber.fill(mobileNumber);
  }
  async clickCreateAccountButton() {
    expect(this.createAccountButton).toBeVisible();
    await this.createAccountButton.click();
  }
  async verifyAccountCreatedIsVisible() {
    await expect(this.titleAccountCreated).toBeVisible();
  }
  async clickContinueButton() {
    expect(this.continueButton).toBeVisible();
    await this.continueButton.click();
  }
}
