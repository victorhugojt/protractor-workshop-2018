import { $, browser } from 'protractor';
import { AddressPage, MenuContentPage,
  OrderSumaryPage, ProductAddModalPage, ShippingPage,  SignInPage } from '../src/page';

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productAddModalPage: ProductAddModalPage = new ProductAddModalPage();
  const orderSumaryPage: OrderSumaryPage = new OrderSumaryPage();
  const signInPage: SignInPage = new SignInPage();
  const addressPage: AddressPage = new AddressPage();
  const shippingPage: ShippingPage = new ShippingPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await menuContentPage.addToCart();
    await productAddModalPage.addProduct();
    await orderSumaryPage.goToSummary();
    await signInPage.sigIn();
    await addressPage.goToAddress();
    await shippingPage.goToShipping();

    await $('#form > p > button > span').click();
    await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await $('#cart_navigation > button > span').click();

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
