import { assert,expect } from "chai"
describe("DemoWebApplication for testing ",async()=>{
       it("sample",async()=>{
         await browser.url("https://magento.softwaretestingboard.com/")
         await browser.maximizeWindow()
         await $("//span[.='Men']").moveTo()
         await browser.pause(2000)
         await $("//a[@id='ui-id-17']").click()
         await browser.pause(2000)


         
       })
    })