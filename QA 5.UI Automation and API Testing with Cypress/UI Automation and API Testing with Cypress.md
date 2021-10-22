

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
```



###Api testing using cypress

We will use the Serverest API project as the target of our tests. This API is an awesome project idealized by Paulo Gonçalves, and mantained by the brazilian opensource community, which allows us to test the most used HTTP methods.

You can check the documentation in https://serverest.dev/.

Now let’s create a new file called GETProdutos.spec.js and make the first call to the target API, using the GET verb in the /produtos route, in order to get a list of products.
To make an HTTP request we must use the cy.request() function, passing the method and url parameters:

Syntax:
cy.request(method, url)
method (String): GET,POST, PUT, DELETE. If no method is defined, Cypress uses the GET method by default.
url (String): The URL to make the request to.

###sample code for api for get request

```javascript

/// <reference types="cypress" />

describe('Products api', () => {
    context('GET /produtos', () => {
        it('should return a list with all products', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/produtos'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                });
        });
    });
});
```

