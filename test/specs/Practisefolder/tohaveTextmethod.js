describe("tohaveText method",async()=>{
    it("demonstation",async()=>{
        await browser.url("https://demowebshop.tricentis.com/login")
        await browser.maximizeWindow()
        let searchbar=await $("//input[@id='Email']")
        await searchbar.setValue("good morning")
        await browser.pause(3000)
       // let val=await searchbar.toequal('value')
        //await expect(searchbar).toHaveText("good morning")
         await expect(searchbar).toHaveValueContaining("ghjmorning")
        // await console.log(val)
    })
})