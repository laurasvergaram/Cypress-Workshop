export class placeOrderPage{

    totalPriceLocator = '#totalm'
    expectedTextTotal = 'Total: 1520' 
    nameInputLocator = '#name'
    nameText = 'Laura'
    countryInputLocator = '#country'
    countryText = 'Colombia'
    cityInputLocator = '#city'
    cityText = 'Cali'
    cardInputLocator = '#card'
    cardText = '123456'
    monthInputLocator = '#month'
    monthText = 'July'
    yearInputLocator = '#year'
    yearText = '2023'
    purchaseButton = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    confirmationMessageLocator = '.sweet-alert > h2'
    confirmationMessageText = 'Thank you for your purchase!'

    confirmTotalPrice(){
        cy.get(this.totalPriceLocator).should('have.text',this.expectedTextTotal)
    }

    insertData(){
        cy.get(this.nameInputLocator).type(this.nameText)
        cy.get(this.countryInputLocator).type(this.countryText)
        cy.get(this.cityInputLocator).type(this.cityText)
        cy.get(this.cardInputLocator).type(this.cardText)
        cy.get(this.monthInputLocator).type(this.monthText)
        cy.get(this.yearInputLocator).type(this.yearText)
    }

    DataAssertions(){
        cy.get(this.nameInputLocator).invoke('val').should('to.equal',this.nameText)
        cy.get(this.countryInputLocator).invoke('val').should('to.equal',this.countryText)
        cy.get(this.cityInputLocator).invoke('val').should('to.equal',this.cityText)
        cy.get(this.cardInputLocator).invoke('val').should('to.equal',this.cardText)
        cy.get(this.monthInputLocator).invoke('val').should('to.equal',this.monthText)
        cy.get(this.yearInputLocator).invoke('val').should('to.equal',this.yearText)

    }

    purchase(){
        cy.get(this.purchaseButton).click()
    }

    purchaseAssertion(){
        cy.get(this.confirmationMessageLocator).should('have.text',this.confirmationMessageText)
    }

}