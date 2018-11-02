import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class ProductAddModalPage {
  private checkOutProductButton: ElementFinder;

  constructor () {
    this.checkOutProductButton = $('[style*="display: block;"] .button-container > a');
  }

  public async addProduct(): Promise<void> {
    const EC = ExpectedConditions;
    const isClickable = EC.elementToBeClickable(this.checkOutProductButton);
    await browser.wait(isClickable, 5000);
    return this.checkOutProductButton.click();
  }

}
