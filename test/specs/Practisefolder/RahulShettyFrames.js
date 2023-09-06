describe("Rahul Shetty Website",async()=>{
    it("how to Handle Frames",async()=>{

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.maximizeWindow()
        console.log(await $$("a").length)
        await browser.switchToFrame(await $("#courses-iframe"))
        await  browser.pause(2000)
        console.log(await $$("a").length)
        await browser.pause(3000)
        await browser.switchToFrame(null)
        console.log(await $$("a").length+100)

        
    })
})