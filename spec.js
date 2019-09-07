describe('Protractor Demo Wefox', function() {
    it('Given the page is loaded', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://my.wefox.de/login');
        browser.sleep(6000);
        browser.wait(browser.getTitle(),25000);
        if (expect(browser.getTitle()).toEqual('Anmeldung – wefox')) {
            console.error('The page is not loaded!: ');
        }
    });
    it('When the user can login and access to agent image', function() {
        browser.driver.wait(function () {
            return element(by.id('user_name'));
        });
        var testData = require('./testData.json');
        browser.sleep(6000);
        //element(by.id('user_name')).sendKeys(testData.username);
        element(by.id('user_name')).sendKeys("aqawefox+testtecnico@wefoxgroup.com");
        browser.driver.wait(function () {
            return element(by.id('password'));
        });
        //element(by.id('password')).sendKeys(testdata.password);
        element(by.id('password')).sendKeys("demo1234");
        browser.driver.wait(function () {
            return element(by.className('wf-c-btn--primary wf-c-btn--block-xs'));
        });
        element(by.className('wf-c-btn--primary wf-c-btn--block-xs')).click();
        
    });
   it('Then the user can access to contracts section', function() {
        browser.driver.wait(function () {
            return element(by.className('wf-c-sidebar-nav__item'));
        });
        browser.sleep(6000);
        var navBar = element.all(by.className('wf-c-sidebar-nav__item')).get(1).click();
        browser.sleep(6000);
        browser.driver.wait(function () {
            return element(by.className('wf-u-pt-24 wf-u-pb-12'));
        });
        browser.sleep(6000);
        if (expect(element(by.className('wf-u-pt-24 wf-u-pb-12')).getText()).toEqual('No contracts added')){
            console.error('The message: No contracts added, is not shown');
        }

        
    });
    it('And the user can access to the Personal Information', function() {
        browser.driver.wait(function () {
            return element(by.className('wf-c-sidebar-nav__item'));
        });
        
        browser.sleep(5000);
        element.all(by.className('wf-c-sidebar-nav__item')).get(4).click();
        browser.driver.wait(function () {
            return element(by.className('wf-c-card wf-u-h-100'));
        });
        browser.sleep(6000);
        element(by.className('wf-c-card wf-u-h-100')).click();
        browser.sleep(6000);
        const inputs = browser.querySelectorAll('.wf-c-field__container input');
        let jsonData = {};
        inputs.forEach((input) => {
            jsonData[input.name] = input.value;
        });
        console.log(jsonData);
        //var personalInfo = require('./personalInfo.json');
        //personalInfo.name.first_name = element(by.id('first_name')).getText();
        //console.log(personalInfo);
    });
    it('And the user can Logout', function() {
        browser.driver.wait(function () {
            return element(by.className('wf-c-sidebar-nav__item'));
        });
        
        browser.sleep(3000);
        element(by.className('wf-c-sidebar-nav__item wf-c-sidebar-nav__item--logout')).click();
        browser.driver.wait(function () {
            return element(by.className('fusion-top-level-link fusion-bar-highlight'));
        });
        browser.sleep(3000);
        element(by.className('fusion-top-level-link fusion-bar-highlight')).click();
    });
  });