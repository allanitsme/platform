module.exports = {
    'open tax module': (browser) => {
        browser
        // open tax listing
            .assert.containsText('.sw-admin-menu__navigation-list-item.sw-settings span.collapsible-text', 'Settings')
            .click('a.sw-admin-menu__navigation-link[href="#/sw/settings/index"]')
            .waitForElementVisible('a.sw-settings-item[href="#/sw/settings/tax/index"]')
            .click('a.sw-settings-item[href="#/sw/settings/tax/index"]');
    },
    'goto create tax page': (browser) => {
        browser
            .click('a[href="#/sw/settings/tax/create"]')
            .waitForElementVisible('.sw-settings-tax-detail .sw-page__content')
            .assert.urlContains('#/sw/settings/tax/create')
            .assert.containsText('.sw-card__title', 'Settings')
            .setValue('input[name=sw-field--tax-name]', 'High tax')
            .setValue('input[name=sw-field--tax-taxRate]', '99')
            .click('.smart-bar__actions button.sw-button--primary')
            .waitForElementVisible('.sw-notifications .sw-alert')
            .assert.containsText('.sw-alert__message', 'The tax High tax has been saved successfully.')
            .assert.urlContains('#/sw/settings/tax/detail');
    },
    'go back to listing': (browser) => {
        browser
            .click('a.smart-bar__back-btn')
            .waitForElementVisible('.sw-settings-tax-list-grid')
            .click('.sw-alert button.sw-alert__close')
            .waitForElementNotPresent('.sw-alert__message');
    },
    'delete tax': (browser) => {
        browser
            .assert.containsText('.sw-grid-row:last-child .sw-grid-column a', 'High tax')
            .click('.sw-grid-row:last-child .sw-context-button__button')
            .waitForElementPresent('body > .sw-context-menu')
            .click('body > .sw-context-menu .sw-context-menu-item--danger')
            .waitForElementVisible('.sw-modal')
            .assert.containsText('.sw-modal .sw-modal__body', 'Are you sure, you want to delete the tax High tax?')
            .click('.sw-modal__footer button.sw-button--primary')
            .waitForElementVisible('.sw-notifications .sw-alert')
            .assert.containsText('.sw-notifications .sw-alert', 'The tax High tax has been deleted successfully.');
    },
    after: (browser) => {
        browser.end();
    }
};
