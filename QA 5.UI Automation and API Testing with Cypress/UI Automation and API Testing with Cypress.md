

# UI Automation and API testing with cypress.
![image](https://user-images.githubusercontent.com/59276457/138414411-1c077f7a-faec-4797-a1b2-fa5ff49250fd.png)




###UI Automation using cypress.io

####what is cypress
cypress is basically open source tool based on java script for QA engineers to automate the UI testing. cypress is more devloper friendly tool becuse of its dom manipulation techniques and it's directly operating in browser.


###But why should we use Cypress?

you can perform various types of automation testing using cypress

- e2e tests
- unit tests
- component testing
- API testing

- So let's Create a our first test
Within Integration we will create a file called test with the spec.js extension — to be identified and executed as a test spec, and we will start to write our first test.
Mocha offers us the following test organization structure:

```javascript
describe('Mocha’s interface', () => {
  context('it provides a way to keep tests easier to read and organized.', () => {
    it('This is your test case', () => {
      expect(true).to.eq(true)
    });
  });
});
