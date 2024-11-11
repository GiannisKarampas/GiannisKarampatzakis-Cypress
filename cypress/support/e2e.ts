import "./commands";
import "cypress-xpath";
import 'cypress-mochawesome-reporter/register';

Cypress.on("uncaught:exception", (err) => {
  // Ignore GTM-related errors involving `push` or `pageViewContext`
  if (
    err.message.includes("loadMoreSettings is not defined") ||
    err.message.includes("Cannot read properties of undefined (reading 'push')") ||
    err.message.includes("window.pageViewContext is not a function")
  ) {
    // Return false to prevent Cypress from failing the test
    return false;
  }
  // Allow other errors to cause test failure as normal
  return true;
});
