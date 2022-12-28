import { landingPage } from "../page-object/LandingPage";
import { nokiaLumia } from "../page-object/NokiaLumia";
import { HTCOne } from "../page-object/HTCOne";

describe('empty spec', () => {
    it('Add items to cart passes', () => {

        const home = new landingPage()
        const nokia = new nokiaLumia()
        const htc = new HTCOne()

        home.visitPage()
        home.clickNokiaLumia1520()
        nokia.validateInfo()
        nokia.addToCart()
        home.visitPage()
        htc.validateInfo()
        htc.addToCart()



    })
})