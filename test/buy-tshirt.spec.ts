import { $, browser } from 'protractor';
import { AddressPage, BankPaymentPage, MenuContentPage, OrderSumaryPage,
  SumaryStepPage, PaymentPage, ProductAddModalPage, ShippingPage,  SignInPage } from '../src/page';

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productAddModalPage: ProductAddModalPage = new ProductAddModalPage();
  const sumaryStepPage: SumaryStepPage = new SumaryStepPage();
  const signInPage: SignInPage = new SignInPage();
  const addressPage: AddressPage = new AddressPage();
  const shippingPage: ShippingPage = new ShippingPage();
  const paymentPage: PaymentPage = new PaymentPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSumaryStepPage: OrderSumaryPage = new OrderSumaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await menuContentPage.addToCart();
    await productAddModalPage.addProduct();
    await sumaryStepPage.goToSummary();
    await signInPage.sigIn();
    await addressPage.goToAddress();
    await shippingPage.goToShipping();
    await bankPaymentPage.goToBank();
    await paymentPage.payment();
    await orderSumaryStepPage.goToOrderSummary();

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
