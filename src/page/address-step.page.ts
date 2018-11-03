import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class AddressPage {
  private addressButton: ElementFinder;

  constructor () {
    this.addressButton = $('#center_column > form > p > button > span');
  }

  public async goToAddress(): Promise<void> {
    const EC = ExpectedConditions;
    const isClickable = EC.elementToBeClickable(this.addressButton);
    await browser.wait(isClickable, 5000);
    return this.addressButton.click();
  }

}
