export class aboutUs{

    videoLocator = '.vjs-poster'
    remainingTimeLocator = '.vjs-remaining-time-display'
    volumeLevelLocator = '.vjs-volume-level'
    aboutUsTittleLocator = '#videoModalLabel'
    expectedText = 'About us'

    playVideo(){
        cy.get(this.videoLocator).click()
        cy.get(this.videoLocator).should(($video) => { expect($video[0].click())})
    }

    videoAssertions(){
        cy.get(this.aboutUsTittleLocator).should('have.text',this.expectedText)
        cy.get(this.videoLocator).should('be.visible')
    }
}