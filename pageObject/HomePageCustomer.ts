import { type Locator, type Page, expect } from "@playwright/test";

export class HomePageCustomer {
  readonly page: Page;
  readonly deleteAccountButton: Locator;
  readonly titleDeleteAccountCompleat: Locator;
  readonly continueButton: Locator;
  readonly logoutButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.deleteAccountButton = page.locator("a[href='/delete_account']");
    this.titleDeleteAccountCompleat = page.getByText("Account Deleted!");
    this.continueButton = page.locator(".btn.btn-primary");
    this.logoutButton = page.locator("a[href='/logout']");
  }

  async verifyUserNameCustomer(Name: string) {
    const userElement = this.page.getByText(Name);
    await userElement.waitFor({ state: 'visible' });
    await expect(userElement).toBeVisible();
  }
  async clickDeleteAccountButton() {
    await this.deleteAccountButton.click();
  }
  async verifyAccountDeleted() {
    await expect(this.titleDeleteAccountCompleat).toBeVisible();
  }
  async clickContinueButton() {
    await this.continueButton.click();
  }
  async clickLogoutButton() {
    await this.logoutButton.click();
  }
}