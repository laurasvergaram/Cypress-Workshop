import { landingPage } from "../page-object/LandingPage"
import { Contact } from "../page-object/Contact"

describe('empty spec', () => {
    it('Contact Passed', () => {
        const home = new landingPage()
        const contact = new Contact()

        home.visitPage()
        home.contact()
        contact.insertData()
        contact.confirmData()
        contact.sendMessage()

  
    })
  })