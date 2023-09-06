describe("how to switch multiple window and handle it",async()=>{
    xit("switchToWindow Method demonstartion",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.pause(1000)
        await $(".blinkingText").click()
        await browser.pause(1000)
        //await $("//div[@class='login-btn']/a[@class='theme-btn']").isDisplayed()
        let texx=await $("//h1")
        await expect(texx).toExist()
    })

    it("passing the switchToWindow command",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.pause(1000)
        await $(".blinkingText").click()
        await browser.pause(1000)
        let handles=await browser.getWindowHandles()
        await console.log(handles)
        await browser.switchToWindow(handles[1])
        let joinNowBtn=await $("//a[.='JOIN NOW']")
        await joinNowBtn.click()
        await browser.newWindow("htpps://www.google.com") //used to create new window
        await browser.pause(4000)


    })
})