import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class BankPaymentPage {
  private bankPaymentButton: ElementFinder;

  constructor () {
    this.bankPaymentButton = $('#form > p > button > span');
  }

  public async goToBank(): Promise<void> {
    const EC = ExpectedConditions;
    const isClickable = EC.elementToBeClickable(this.bankPaymentButton);
    await browser.wait(isClickable, 5000);
    return this.bankPaymentButton.click();
  }

}
