# Cypress E2E Tests

All commands in this section should be run from the same directory that this README is in.

Before running tests, install dependencies:
```
npm install
```

## Tips for development

During active development, it is helpful to run:
```
npm run open
```
This will open a Cypress UI that will list the names of files containing Cypress tests. If you click a file, the tests in that file will run in a new window. You will be able to see logs for each step of the test, along with screenshots. If you keep the window open, the tests will re-run every time you modify the test file.

## Running tests

If you have a local environment running on port 3000, you can run all Cypress e2e tests on Chrome with the following command. Note that tests will run in headless mode by default.
```
npm run test
```

To run tests in headfull mode:
```
npm run test:headfull
```
