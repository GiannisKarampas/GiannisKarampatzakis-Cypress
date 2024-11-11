import { SearchPage } from "../../pages/search.page";

describe("Unibet Blog Search Feature", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display search results for a valid search term", () => {
    SearchPage.searchTerm("football");
    cy.xpath("(//div[@class='pb-4 col-md-12'])[1]").should("be.visible");
    cy.xpath("(//div[@class='card-body d-flex flex-column justify-content-between'])[1]").contains("football");
  });

  it("should display no results message for an invalid search term", () => {
    SearchPage.searchTerm("xyzxyz123");
    cy.get("#post-0").then(($element) => {
        const messageText = $element.text();
        cy.log("Displayed message:", messageText);
      });
    cy.get("#post-0").should("be.visible").and("contain.text", "Nothing Found");
  });

  it("Search icon must be visible while switching between mobile and desktop views", () => {
    cy.fixture("selectors").then((sel) => {
      cy.xpath(sel.searchIcon).should("be.visible");

      // Switch to mobile view and check
      cy.viewport(375, 667);
      cy.xpath(sel.mobileSearchIcon).should("be.visible");

      // Switch back to desktop view and check
      cy.viewport(1280, 800);
      cy.xpath(sel.searchIcon).should("be.visible");
    });
  });
});
