import { test, expect } from "@playwright/test";
import { PageManager } from "../../pageObject/PageManager";
import * as data from "../../utils/data.json";

test("Register with existing email", async ({ page }) => {
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
    await signupAndLoginPage.inputNameInSignupTextFieldName(data.registerFail.name);
    await signupAndLoginPage.inputEmailInSignupTextFieldEmail(
      data.registerFail.email
    );
    await signupAndLoginPage.clickSignupButton();
    await signupAndLoginPage.verifyErrorMessageEmailAlreadyExistIsVisible();
});