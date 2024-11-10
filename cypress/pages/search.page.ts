export class SearchPage {
  constructor() {}

  public static searchTerm(term: string) {
    cy.search(term)
    // cy.x÷path("(//*[name()='svg'][@id='searchIcon'])[2]").type(`${term}{enter}`);
  }
}
