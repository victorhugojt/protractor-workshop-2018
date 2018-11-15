import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;
  private addToCartButton: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
    this.addToCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToTShirtMenu(): Promise<void> {
    return await this.tShirtMenu.click();
  }

  public async addToCart(): Promise<void> {
    const EC = ExpectedConditions;
    const isClickable = EC.elementToBeClickable(this.addToCartButton);
    await browser.wait(isClickable, 5000);
    return this.addToCartButton.click();
  }
}
