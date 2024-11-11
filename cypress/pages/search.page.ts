export class SearchPage {
  constructor() {}

  public static searchTerm(term: string) {
    cy.search(term)
  }
}
