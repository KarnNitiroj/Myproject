import { type Locator, type Page, expect } from '@playwright/test'



export class HomePage {
  readonly page: Page
  readonly titlePage: Locator
  readonly signupAndLoginButton: Locator
 

  constructor (page: Page) {
    this.page = page
    this.titlePage = page.locator("img[alt='Website for automation practice']")
    this.signupAndLoginButton = page.locator("a[href='/login']")
    
  }

  async goTo (URL: string): Promise<void> {
    await this.page.goto(URL)
    await this.page.waitForLoadState('networkidle')
  }

  async verifyHomePageTitle () {
    await expect(this.titlePage).toBeVisible()
  }
  async clickSignupAndLoginButton (){
    await this.signupAndLoginButton.click()
  }
}