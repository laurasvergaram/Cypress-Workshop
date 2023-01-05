export class Contact{

    EmailLocator = '#recipient-email'
    EmailInsert = 'test@testemail.com'
    NameLocator = '#recipient-name'
    NameInsert = 'Laura Vergara'
    MessageLocator = '#message-text'
    MessageInsert = 'This is a test message'
    SendMessageLocator = '#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    CancelMessageLocator = '#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'


    insertData(){
        cy.get(this.EmailLocator).type(this.EmailInsert)
        cy.get(this.NameLocator).type(this.NameInsert)
        cy.get(this.MessageLocator).type(this.MessageInsert)
    }

    confirmData(){
        cy.get(this.EmailLocator).invoke('val').then(cy.log)
        cy.get(this.EmailLocator).invoke('val').should('to.equal',this.EmailInsert)
        cy.get(this.NameLocator).invoke('val').should('to.equal',this.NameInsert)
        cy.get(this.MessageLocator).invoke('val').should('to.equal',this.MessageInsert)
    }

    sendMessage(){
        cy.get(this.SendMessageLocator).click()
    }

    cancelMessage(){
        cy.get(this.CancelMessageLocator).click()
    }
}