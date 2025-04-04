import { test, expect } from "@playwright/test";
import { PageManager } from "../../pageObject/PageManager";
import * as data from "../../utils/data.json";

test.beforeEach(async ({ page }) => {
    const pageManager = new PageManager(page);
    const HomePage = pageManager.HomePage();
    const signupAndLoginPage = pageManager.SignupAndLoginPage();
    const signupPage = pageManager.SignupPage();
    const homePageCustomer = pageManager.HomePageCustomer();
    await HomePage.goTo(data.baseURL);
    await HomePage.verifyHomePageTitle();
    await HomePage.clickSignupAndLoginButton();
    await signupAndLoginPage.verifyNewUserSignupIsVisible();
    await signupAndLoginPage.inputNameInSignupTextFieldName(data.login.name);
    await signupAndLoginPage.inputEmailInSignupTextFieldEmail(data.login.email);
    await signupAndLoginPage.clickSignupButton();
    await signupPage.verifyAccountInformationIsVisible();
    await signupPage.selectTitle(data.register.title);
    await signupPage.verifyNameInTextFieldName(data.login.name);
    await signupPage.verifyEmailInTextFieldEmail(data.login.email);
    await signupPage.inputPasswordInTextFieldPassword(data.login.password);
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
    await homePageCustomer.clickLogoutButton();
  });
  

test("Logout user", async ({ page }) => {
    const pageManager = new PageManager(page);
    const HomePage = pageManager.HomePage();
    const signupAndLoginPage = pageManager.SignupAndLoginPage();
    const homePageCustomer = pageManager.HomePageCustomer();
  
    // test steps
    await HomePage.goTo(data.baseURL);
    await HomePage.verifyHomePageTitle();
    await HomePage.clickSignupAndLoginButton();
    await signupAndLoginPage.verifyLoginToYourAccountIsVisible();
    await signupAndLoginPage.fillLoginTextFieldEmail(data.login.email);
    await signupAndLoginPage.fillLoginTextFieldPassword(data.login.password);
    await signupAndLoginPage.clickLoginButton();
    await homePageCustomer.verifyUserNameCustomer(data.register.name);
    await homePageCustomer.clickLogoutButton();
    await signupAndLoginPage.verifyLoginToYourAccountIsVisible();
  });