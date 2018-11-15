import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class PaymentPage {
  private paymentButton: ElementFinder;

  constructor () {
    this.paymentButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async payment(): Promise<void> {
    const EC = ExpectedConditions;
    const isClickable = EC.elementToBeClickable(this.paymentButton);
    await browser.wait(isClickable, 5000);
    return this.paymentButton.click();
  }

}
