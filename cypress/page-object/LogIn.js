export class logIn{

    userInputLocator = '#loginusername'
    passwordInputLocator = '#loginpassword'
    userNameInsert = 'user232'
    passwordInsert = 'password'
    signInButtonLocator = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'

    logInInfo(){
        
        cy.get(this.userInputLocator).type(this.userNameInsert)
        cy.get(this.passwordInputLocator).type(this.passwordInsert)
        cy.get(this.signInButtonLocator).click()

    }
    
}