// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-xpath";
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')
// Cypress.on("uncaught:exception", (err) => {
//   // Ignore specific error messages
//   if (err.message.includes("loadMoreSettings is not defined")) {
//     // Returning false prevents Cypress from failing the test
//     return false;
//   }
//   // If it's a different error, let Cypress throw it as usual
//   return true;
// });

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
