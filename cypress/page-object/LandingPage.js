export class landingPage{
    landingPageUrl = 'https://www.demoblaze.com/'
    loginButtonLocator = '#login2'
    nokiaLinkLocator = ':nth-child(2) > .card > .card-block > .card-title > .hrefch'
    htcLinkLocator = ':nth-child(7) > .card > .card-block > .card-title > .hrefch'
    contactLocator = ':nth-child(2) > .nav-link'
    aboutUsLocator = ':nth-child(3) > .nav-link'
    userNameTextLocator = '#nameofuser'
    expectedHaveText = 'Welcome user232'
    logOutTextLocator = '#logout2'
    expectedContainsText = 'out'
    cartButtonLocator = '#cartur'

    visitPage(){
        cy.visit(this.landingPageUrl,{ timeout: 5000 })
    }

    logInUser(){
        cy.get(this.loginButtonLocator).click()
    }

    logInAssertion(){
        cy.get(this.userNameTextLocator).should('have.text',this.expectedHaveText)
        cy.get(this.logOutTextLocator).contains(this.expectedContainsText)
    }

    clickNokiaLumia1520(){
        cy.get(this.nokiaLinkLocator).click()
    }

    clickHTCOne(){
        cy.get(this.htcLinkLocator).click()
    }

    contact(){
        cy.get(this.contactLocator).click()
    }

    aboutUs(){
        cy.get(this.aboutUsLocator).click()
    }

    cart(){
        cy.get(this.cartButtonLocator).click()
    }



}