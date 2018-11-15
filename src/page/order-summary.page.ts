import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class OrderSumaryPage {
  private orderSumaryButton: ElementFinder;

  constructor () {
    this.orderSumaryButton = $('#cart_navigation > button > span');
  }

  public async goToOrderSummary(): Promise<void> {
    const EC = ExpectedConditions;
    const isClickable = EC.elementToBeClickable(this.orderSumaryButton);
    await browser.wait(isClickable, 5000);
    return this.orderSumaryButton.click();
  }

}
