export class HTCOne{
    addToCartButton = '.col-sm-12 > .btn'
    cellphoneNameLocator = '.name'
    priceLocator = '.price-container'
    expectedName = 'HTC One M9'
    expectedPrice = '$700 *includes tax'

    addToCart(){
        cy.get(this.addToCartButton).click()
    }

    validateInfo(){
        cy.get(this.cellphoneNameLocator).should('have.text',this.expectedName)
        cy.get(this.priceLocator).should('have.text',this.expectedPrice)
    }
}