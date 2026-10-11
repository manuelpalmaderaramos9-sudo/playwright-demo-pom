const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

Given('el usuario ingresa como {string}', async function (user) {

    const loginPage = new LoginPage(this.page);

    await loginPage.goTo();
    await loginPage.login(user, 'secret_sauce');

});

Then('visualiza la página de productos', async function () {

    const title = this.page.locator('.title');

    await expect(title).toHaveText('Products');

});

Then('se muestra un mensaje de error', async function () {

    const error = this.page.locator('[data-test="error"]');

    await expect(error).toBeVisible();

});