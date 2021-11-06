describe("provjera login forme na CoD forumu", () => {

    browser.waitForAngularEnabled(false);

    beforeAll(() => {
        browser.get("https://cityofdreams.info");
        browser.sleep(5000);
    });
    
    it("dobar unos", () => {
        let user = {
            username: "test_account",
            password: "test6vUe256V5sDv"
        };

        let dugmeZaPrijavu = element(by.className("signin"));
        let usernameField = element(by.className("input_text"));
        let passwrodField = element(by.className("input_password"));
        let prijavaButton = element(by.className("button_submit"));
        let poruka = element(by.id("hithere"));

        dugmeZaPrijavu.click();

        browser.sleep(5000);

        usernameField.sendKeys(user.username);
        passwrodField.sendKeys(user.password);
        prijavaButton.click();

        browser.sleep(5000);

        expect(poruka.getText()).toEqual("Pozdrav test_account");
    });


});