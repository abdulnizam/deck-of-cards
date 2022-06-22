const host = "http://localhost:3000/";

describe("Deck Page e2e tests", () => {

  describe("on the page", () => {

    before(() => {
      cy.visit(host);
    });

    it("should have Main Container", () => {
      cy.get(`div[data-testid="main-container"]`)
        .should("have.length", 1);
    });

    it("should render buttons", () => {
        cy.get(`div[data-testid="buttons"]`)
          .should("have.length", 1);
    });

    it("should have 52 cards on the deck", () => {
        cy.get(`div[data-testid="cards-true"]`)
          .should("have.length", 52);
    });

    it('should click Withdrawn 2 times and count 2 cards', () => {
        const drawCard = `button[data-testid="draw-a-card"]`;
        const showCard = `button[data-testid="show-a-card"]`;
        cy.get(drawCard).click({force: true});
        cy.get(drawCard).click({force: true});
        cy.get(showCard).click({force: true});

        cy.get(`div[data-testid="cards-true"]`).should("have.length",2);
        cy.get(showCard).click({force: true});
      });

    // it("should have country sections", () => {
    //   cy.get(`div[data-testid="vacation-country-section"]`);
    // });

    // it("Main CTA title should be visible", () => {
    //   cy.get(`div[data-testid="vacation-dropdown-title"]`).scrollIntoView();
    // });

    });
});
