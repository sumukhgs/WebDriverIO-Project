//amazon Application
describe("flipkart Application",async()=>{
    it("Scollintoview method demonstration",async()=>{
        await browser.url("https://www.flipkart.com/")
        await browser.maximizeWindow()
        await browser.pause(2000)
        await $("//input[@class='_3704LK']").setValue("bean bag")
        await browser.pause(1500)
        await $("//button[@class='L0Z3Pu']").click()
        await browser.pause(3000)

        let offer=await $("//div[text()='Special Price']")
        offer.scrollIntoView()
        await browser.pause(2000)
        offer.click()
        await browser.pause(3000)

     
    })
})




