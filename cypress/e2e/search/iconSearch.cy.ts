describe("Unibet Blog Search Feature - Check search icon", () => {
  it("Search icon must be visible while switching between mobile and desktop views", () => {
    cy.visit("/");
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
