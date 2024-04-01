class LoginPage {

    constructor() {
        this.pageTitle = "h3"
    }

    verifyPageTitle(pageTitle) {
        cy.get(this.pageTitle).should('have.text', pageTitle)
    }
}
export const loginPage = new LoginPage();