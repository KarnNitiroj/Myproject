import { test, expect } from "@playwright/test";
import { PageManager } from "../../pageObject/PageManager";
import * as data from "../../utils/data.json";


test("Login with incorrect email and password", async ({ page }) => {
    const pageManager = new PageManager(page);
    const HomePage = pageManager.HomePage();
    const signupAndLoginPage = pageManager.SignupAndLoginPage();
  
    // test steps
    await HomePage.goTo(data.baseURL);
    await HomePage.verifyHomePageTitle();
    await HomePage.clickSignupAndLoginButton();
    await signupAndLoginPage.verifyLoginToYourAccountIsVisible();
    await signupAndLoginPage.fillLoginTextFieldEmail(data.loginFail.email);
    await signupAndLoginPage.fillLoginTextFieldPassword(data.loginFail.password);
    await signupAndLoginPage.clickLoginButton();
    await signupAndLoginPage.verifyErrorMessageLoginIsVisible();
  });
  