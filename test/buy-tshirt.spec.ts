import { $, browser, ExpectedConditions } from 'protractor';
import { MenuContentPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const EC = ExpectedConditions;

  const menuContentPage: MenuContentPage = new MenuContentPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();

    const btn = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
    const isClickable = EC.elementToBeClickable(btn);
    browser.wait(isClickable, 5000);
    await btn.click();

    await $('[style*="display: block;"] .button-container > a').click();
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
