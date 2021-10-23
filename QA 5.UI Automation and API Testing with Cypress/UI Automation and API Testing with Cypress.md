

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


###Simple Testcase in cypress
so here i wroted a simple code bloack for demo.
```javascript
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
```

so above code block is simple Assertion passing test cases, same way we can also write a Assertion failling testcase

output:-

![image](https://user-images.githubusercontent.com/59276457/138545215-b546a655-a002-45a4-a06f-64adaa5fb5f2.png)


to fail the assertion you have to just put a false in to.equal(false) function
see the below code block for more information

```javascript
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})
```
Output:-

![image](https://user-images.githubusercontent.com/59276457/138545221-1f80cb83-9890-4543-8737-223ef5ead79a.png)


###Api testing using cypress

cypress is just not ui automation test runner, if you see the what cypress do on web diagram then you notticed http request and http response termes, so what it's exactly means is we can also automate the Api testing using cypress.

we can perform all request such as get,put,post,delete,patch using  cypress, for more information you can check the below code block

```javascript
// api-spec.js
describe('via API', () => {
  beforeEach(resetDatabase)

  // used to create predictable ids
  let counter = 1
  beforeEach(() => {
    counter = 1
  })

  const addTodo = title =>
    cy.request('POST', '/todos', {
      title,
      completed: false,
      id: String(counter++)
    })

  const fetchTodos = () => cy.request('/todos').its('body')

  const deleteTodo = (id) => cy.request('DELETE', `/todos/${id}`)

  it('adds todo', () => {
    addTodo('first todo')
    addTodo('second todo')
    fetchTodos().should('have.length', 2)
  })

  it('adds todo deep', () => {
    addTodo('first todo')
    addTodo('second todo')
    fetchTodos().should('deep.equal', [
      {
        title: 'first todo',
        completed: false,
        id: '1'
      },
      {
        title: 'second todo',
        completed: false,
        id: '2'
      }
    ])
  })

  it('adds and deletes a todo', () => {
    addTodo('first todo')  // id "1"
    addTodo('second todo') // id "2"
    deleteTodo('2')
    fetchTodos().should('deep.equal', [
      {
        title: 'first todo',
        completed: false,
        id: '1'
      }
    ])
  })
})
```

API tests are useful because they can confirm that the server does the right thing for edge cases that are not easy to trigger through the UI. For example, let us confirm that the server does not crash and burn when we are trying to delete a non-existent item.

```javascript
it('does not delete non-existent item', () => {
  cy
    .request({
      method: 'DELETE',
      url: 'todos/aaa111bbb',
      failOnStatusCode: false
    })
    .its('status')
    .should('equal', 404)
})

```

output:-

![image](https://user-images.githubusercontent.com/59276457/138545866-832ac695-645a-4861-8cdb-a31453f60a0e.png)


I hop you like the above information and find it use full, Thank you for reading!
