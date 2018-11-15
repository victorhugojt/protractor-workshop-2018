import { $, /*browser,*/ ElementFinder/*, ExpectedConditions*/ } from 'protractor';

export class ShippingPage {
  private shippingButton: ElementFinder;

  constructor () {
    this.shippingButton = $('#cgv');
  }

  public async goToShipping(): Promise<void> {
    // const EC = ExpectedConditions;
    // const isClickable = EC.elementToBeClickable(this.shippingButton);
    // await browser.wait(isClickable, 7000);
    return this.shippingButton.click();
  }

}
