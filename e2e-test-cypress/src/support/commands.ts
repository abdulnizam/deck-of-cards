declare namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
        reloadOnRetry(): void;
        visitInDarkMode(url: string): void;
        visitInLightMode(url: string): void;
        changeUnit(unit: string): void;
        interceptAdRequest(): void;
        visitPrebidDebug(url: string): void;
    }
}