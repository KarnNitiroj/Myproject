import { Page } from "@playwright/test";
import { HomePage } from "./HomePageGuest.ts";
import { SignupAndLoginPage } from "./SignupAndLoginPage.ts";
import { SignupPage } from "./SignupPage.ts";
import { HomePageCustomer } from "./HomePageCustomer.ts";

export class PageManager {
  private homePage: HomePage;
  private signupAndLoginPage: SignupAndLoginPage;
  private signupPage: SignupPage;
  private homePageCustomer: HomePageCustomer;

  constructor(private page: Page) {
    this.homePage = new HomePage(page);
    this.signupAndLoginPage = new SignupAndLoginPage(page);
    this.signupPage = new SignupPage(page);
    this.homePageCustomer = new HomePageCustomer(page);
  }

  HomePage() {
    return this.homePage;
  }

  SignupAndLoginPage() {
    return this.signupAndLoginPage;
  }

  SignupPage() {
    return this.signupPage;
  }

  HomePageCustomer() {
    return this.homePageCustomer;
  }
}
