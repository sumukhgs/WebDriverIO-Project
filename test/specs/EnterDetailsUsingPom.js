import HomePage from "../pageobjects/HomeLoginPage.js"
import { expect,assert } from "chai"

describe("login to application",async()=>{
    it("launch the app",async()=>{
        await HomePage.openurl()
        let title=await browser.getTitle()
        expect(title).to.be.equal("LoginPage Practise | Rahul Shetty Academy")
        await HomePage.enterusername("sumukh")
        await browser.pause(2000)
        await HomePage.enterpassword("password")
        await browser.pause(2000)
        await HomePage.clickOnterms()
        await browser.pause(2000)
        await HomePage.clickonsignin()
        await browser.pause(3000)
    })
})