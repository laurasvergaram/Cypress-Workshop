import { landingPage } from "../page-object/LandingPage";
import { nokiaLumia } from "../page-object/NokiaLumia";
import { HTCOne } from "../page-object/HTCOne";
import { cartPage } from "../page-object/CartPage";

describe('empty spec', () => {
    it('Add items to cart passes', () => {

        const home = new landingPage()
        const nokia = new nokiaLumia()
        const htc = new HTCOne()
        const cart = new cartPage()

        home.visitPage()
        home.clickNokiaLumia1520()
        nokia.validateInfo()
        nokia.addToCart()
        home.visitPage()
        home.clickHTCOne()
        htc.validateInfo()
        htc.addToCart()
        home.cart()
        cart.confirmTotal()



    })
})