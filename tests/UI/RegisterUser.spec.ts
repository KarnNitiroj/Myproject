import { test, expect } from "@playwright/test";
import { PageManager } from "../../pageObject/PageManager";
import * as data from "../../utils/data.json";

test("Register a new user", async ({ page }) => {
  const pageManager = new PageManager(page);
  const HomePage = pageManager.HomePage();
  const signupAndLoginPage = pageManager.SignupAndLoginPage();
  const signupPage = pageManager.SignupPage();
  const homePageCustomer = pageManager.HomePageCustomer();

  // test steps
  await HomePage.goTo(data.baseURL);
  await HomePage.verifyHomePageTitle();
  await HomePage.clickSignupAndLoginButton();
  await signupAndLoginPage.verifyNewUserSignupIsVisible();
  await signupAndLoginPage.inputNameInSignupTextFieldName(data.register.name);
  await signupAndLoginPage.inputEmailInSignupTextFieldEmail(
    data.register.email
  );
  await signupAndLoginPage.clickSignupButton();
  await signupPage.verifyAccountInformationIsVisible();
  await signupPage.selectTitle(data.register.title);
  await signupPage.verifyNameInTextFieldName(data.register.name);
  await signupPage.verifyEmailInTextFieldEmail(data.register.email);
  await signupPage.inputPasswordInTextFieldPassword(data.register.password);
  await signupPage.selectDateOfBirth(
    data.register.birthDay,
    data.register.birthMonth,
    data.register.birthYear
  );
  await signupPage.clickCheckBoxNewsletter();
  await signupPage.clickCheckBoxReceiveOffers();
  await signupPage.verifyTitleAddressInformationIsVisible();
  await signupPage.inputFirstNameInTextFieldFirstName(
    data.information.firstName
  );
  await signupPage.inputLastNameInTextFieldLastName(data.information.lastName);
  await signupPage.inputCompanyInTextFieldCompany(data.information.company);
  await signupPage.inputAddress1InTextFieldAddress1(data.information.address1);
  await signupPage.inputAddress2InTextFieldAddress2(data.information.address2);
  await signupPage.selectCountryInDropDownCountry(data.information.country);
  await signupPage.inputStateInTextFieldState(data.information.state);
  await signupPage.inputCityInTextFieldCity(data.information.city);
  await signupPage.inputZipCodeInTextFieldZipCode(data.information.zipCode);
  await signupPage.inputMobileNumberInTextFieldMobileNumber(
    data.information.mobileNumber
  );
  await signupPage.clickCreateAccountButton();
  await signupPage.verifyAccountCreatedIsVisible();
  await signupPage.clickContinueButton();
  await homePageCustomer.verifyUserNameCustomer(data.register.name);
  await homePageCustomer.clickDeleteAccountButton();
  await homePageCustomer.verifyAccountDeleted();
  await homePageCustomer.clickContinueButton();
  await HomePage.verifyHomePageTitle();
});
