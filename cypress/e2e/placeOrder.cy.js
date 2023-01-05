import { landingPage } from "../page-object/LandingPage";
import { nokiaLumia } from "../page-object/NokiaLumia";
import { HTCOne } from "../page-object/HTCOne";
import { cartPage } from "../page-object/CartPage";
import { placeOrderPage } from "../page-object/PlaceOrderPage";

describe('empty spec', () => {
    it('Add items to cart passes', () => {

        const home = new landingPage()
        const nokia = new nokiaLumia()
        const htc = new HTCOne()
        const cart = new cartPage()
        const place = new placeOrderPage()

        home.visitPage()
        // home.clickNokiaLumia1520()
        // nokia.addToCart()
        // home.visitPage()
        // home.clickHTCOne()
        // htc.addToCart()
        home.cart()
        cart.placeOrder()
        place.insertData()
        place.DataAssertions()
        place.purchase()
        place.purchaseAssertion()

    })
})