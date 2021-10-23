

# UI Automation and API testing with cypress.

![image](https://user-images.githubusercontent.com/59276457/138414411-1c077f7a-faec-4797-a1b2-fa5ff49250fd.png)




###what is cypress.

Cypress is basically morden front end testing tool based on JavaScript Framework which is most oftnely used by devlopers and QA engineers to automated the testing process.

using cypress we can devloped all types of test Cases, such as

- Unit Test Case
- Integration Test Case
- End to End Test Case

And why i liked cypress becuse these tool can test anything which runs on the browser.

Cypress is moslty compered with selenium but howevery its fundamentally and architecturally different, Cypress does not have the same restriction as selenium.

And this makes you to write faster, easier and more reliable test case.


###what Cypress do on the web

![image](https://user-images.githubusercontent.com/59276457/138543915-a3c37766-fab1-45f2-a520-73922308b564.png)














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

The .should() function is modeled identically to the way Promises work in JavaScript. Whatever is returned from the callback function becomes the new subject and will flow into the next command.
Passing a function to .should() enables you to make multiple assertions on the yielded subject. For now we will not make any assertions, we will just throw the result on the screen using cy.log().


