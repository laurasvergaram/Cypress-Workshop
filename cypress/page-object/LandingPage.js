export class landingPage{
    landingPageUrl = 'https://www.demoblaze.com/'
    loginButtonLocator = '#login2'
    nokiaLinkLocator = ':nth-child(2) > .card > .card-block > .card-title > .hrefch'

    visitPage(){
        cy.visit(this.landingPageUrl)
    }

    logInUser(){
        cy.get(this.loginButtonLocator).click()
    }

    clickNokiaLumia1520(){
        cy.get(this.nokiaLinkLocator).click()
    }



}