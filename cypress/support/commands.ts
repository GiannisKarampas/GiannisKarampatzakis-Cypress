import { searchSelectors } from "cypress/fixtures/searchSelectors";

Cypress.Commands.add("search", (term: string) => {
  cy.xpath(searchSelectors.searchIcon).click();
  cy.xpath(searchSelectors.searchInput).type(`${term}{enter}`);
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to perform a search action.
       * @param term - The term to search for
       * @example cy.search("sports")
       */
      search(term: string): Chainable<any>;
    }
  }
}
