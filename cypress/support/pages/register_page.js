class RegisterPage {

    constructor() {
        //Web elementler
        this.nameInput = '#first_name';
        this.lastnameInput = '#last_name';
        this.dataOfBirthInput = '#dob';
        this.addressInput = '#address';
        this.cityInput = '#city';
        this.stateInput = '#state';
        this.postcodeInput = '#postcode';
        this.countrySelect = '#country';
        this.phoneInput = '#phone';
        this.emailInput = '#email';
        this.passwordInput = '#password';
        this.registerButton = '[type="submit"]';


    }

    //Methodlar

    writeName(firstName){
        cy.get(this.nameInput).type(firstName);
    }

    writeLastname(lastName){
        cy.get(this.lastnameInput).type(lastName);
    }

    writeDateOfBirth(dateOfBirth){
        cy.get(this.dataOfBirthInput).type(dateOfBirth);
    }

    writeAddress(address){
        cy.get(this.addressInput).type(address);
    }

    writeCity(city){
        cy.get(this.cityInput).type(city);
    }

    writeState(state){
        cy.get(this.stateInput).type(state);
    }

    writePostcode(postCode){
        cy.get(this.postcodeInput).type(postCode);
    }

    selectCountry(country){
        cy.get(this.countrySelect).select(country);
    }

    writePhone(phoneNumber){
        cy.get(this.phoneInput).type(phoneNumber);
    }

    writeEmail(email){
        cy.get(this.emailInput).type(email);
    }

    writePassword(password){
        cy.get(this.passwordInput).type(password);
    }

    clickRegisterButton(){
        cy.get(this.registerButton).click();
    }
}
export const registerPage = new RegisterPage();