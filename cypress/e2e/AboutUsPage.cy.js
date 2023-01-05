import { landingPage } from "../page-object/LandingPage"
import { aboutUs } from "../page-object/AboutUs"

describe('empty spec', () => {
    it('Contact Passed', () => {
        const home = new landingPage()
        const about = new aboutUs()

        home.visitPage()
        home.aboutUs()
        about.playVideo()
        about.videoAssertions()

        

  
    })
  })