



const { faker } = require("@faker-js/faker/locale/af_ZA");
const { registerPage } = require("../support/pages/register_page");
const { loginPage } = require("../support/pages/login_page");


describe('template spec', () => {
  let register_data;
  let login_data;
  let fakeMail;
  before(() => {
    cy.fixture('register-data').then((data) => {
      register_data = data;
    })
    cy.fixture('login_data').then((data) => {
      login_data = data;
    })
    fakeMail = faker.internet.email();
  });
  it('passes', () => {
    cy.visit('/' + Cypress.env('register'));

    registerPage.writeName(register_data.name);
    registerPage.writeLastname(register_data.lastname);
    registerPage.writeDateOfBirth(register_data.dateOfBirth);
    registerPage.writeAddress(register_data.address);
    registerPage.writeCity(register_data.city);
    registerPage.writeState(register_data.state);
    registerPage.writePostcode(register_data.postcode);
    registerPage.selectCountry(register_data.country);
    registerPage.writePhone(register_data.phone);
    registerPage.writeEmail(register_data.email);
    registerPage.writePassword(register_data.password);
    registerPage.clickRegisterButton();
    loginPage.verifyPageTitle(login_data.pageTitle);

  })
})