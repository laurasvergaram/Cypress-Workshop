import { landingPage } from "../page-object/LandingPage"
import { logIn } from "../page-object/LogIn"
describe('empty spec', () => {
  it('Log In Passed', () => {

    const home = new landingPage()
    const login = new logIn()

    home.visitPage()
    home.logInUser()
    login.logInInfo()
    home.logInAssertion()


  })
})