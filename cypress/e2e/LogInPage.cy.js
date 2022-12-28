import { landingPage } from "../page-object/LandingPage"
describe('empty spec', () => {

  const userInputLocator = '#loginusername'
  const passwordInputLocator = '#loginpassword'
  const userNameInsert = 'user232'
  const passwordInsert = 'password'
  const signInButtonLocator = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
  const userNameTextLocator = '#nameofuser'
  const expectedHaveText = 'Welcome user232'
  const logOutTextLocator = '#logout2'
  const expectedContainsText = 'out'

  it('Log In Passed', () => {

    const home = new landingPage()

    home.visitPage()
    home.logInUser()

    cy.get(userInputLocator).type(userNameInsert)
    cy.get(passwordInputLocator).type(passwordInsert)
    cy.get(signInButtonLocator).click()
    cy.get(userNameTextLocator).should('have.text',expectedHaveText)
    cy.get(logOutTextLocator).contains(expectedContainsText)

  })
})