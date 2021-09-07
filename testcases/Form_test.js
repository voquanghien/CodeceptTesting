Feature('Form test');

Scenario('test something', ({ I }) => {
    I.amOnPage('/');
    I.see('Hello World');
    I.seeElement('h2');
    I.fillField("fname", "Michael");
    I.fillField("lname", "Wayne");
    I.checkOption('#female');
    I.selectOption("cars", "saab");
    I.click("#showme");
});
