import { $, browser } from 'protractor';
import { MenuContentPage, ProductAddModalPage } from '../src/page';

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productAddModalPage: ProductAddModalPage = new ProductAddModalPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await menuContentPage.addToCart();
    await productAddModalPage.addProduct();

    await $('.cart_navigation span').click();

    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await $('#SubmitLogin > span').click();

    await $('#center_column > form > p > button > span').click();

    await $('#cgv').click();

    await $('#form > p > button > span').click();
    await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await $('#cart_navigation > button > span').click();

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
