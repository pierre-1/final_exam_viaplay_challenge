describe("User can see Viaplay Shows", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "",
    });
  });
  it("successfully", () => {
    cy.visit("/");
  });
});
