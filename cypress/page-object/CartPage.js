export class cartPage{
    totalPriceLocator = '#totalp'
    expectedTotal = '1520'
    placeOrderButtonLocator = '.col-lg-1 > .btn'

    confirmTotal(){
        cy.get(this.totalPriceLocator).should('have.text',this.expectedTotal)
    }

    placeOrder(){
        cy.get(this.placeOrderButtonLocator).click()
    }
}