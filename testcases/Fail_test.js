Feature('Fail test');

Scenario('test fail something', ({ I }) => {
    I.amOnPage('/');
    I.dontSee('Hello World');
});
