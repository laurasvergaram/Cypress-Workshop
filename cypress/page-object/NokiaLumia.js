export class nokiaLumia{
    addToCartButton = '.col-sm-12 > .btn'
    cellphoneNameLocator = '.name'
    priceLocator = '.price-container'
    expectedName = 'Nokia lumia 1520'
    expectedPrice = '$820 *includes tax'

    addToCart(){
        cy.get(this.addToCartButton).click()
    }

    validateInfo(){
        cy.get(this.cellphoneNameLocator).should('have.text',this.expectedName)
        cy.get(this.priceLocator).should('have.text',this.expectedPrice)
    }
}