import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class SignInPage {
  private userField: ElementFinder;
  private passwordField: ElementFinder;
  private submitButton: ElementFinder;

  constructor () {
    this.userField = $('#email');
    this.passwordField = $('#passwd');
    this.submitButton = $('#SubmitLogin > span');
  }

  public async sigIn(): Promise<void> {
    const EC = ExpectedConditions;
    const isClickable = EC.elementToBeClickable(this.submitButton);
    await this.userField.sendKeys('aperdomobo@gmail.com');
    await this.passwordField.sendKeys('WorkshopProtractor');
    await browser.wait(isClickable, 5000);
    return this.submitButton.click();
  }

}
