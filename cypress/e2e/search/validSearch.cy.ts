import { SearchPage } from "../../pages/search.page";

describe("Unibet Blog Search Feature - Valid search", () => {
  it("Should display search results for a valid search term", () => {
    cy.visit("/");
    SearchPage.searchTerm("football");
    cy.xpath("(//div[@class='pb-4 col-md-12'])[1]").should("be.visible");
    cy.xpath(
      "(//div[@class='card-body d-flex flex-column justify-content-between'])[1]"
    ).contains("football");
  });
});
