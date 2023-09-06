describe("Handling Dynamic Drop-downs",async()=>{
    it("rahul shetty website",async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("//input[@id='autocomplete']").setValue("ind")
        await browser.pause(3000)
        const lists=await $$("//li[@class='ui-menu-item']/div")
        await browser.pause(1000)
        for (let i=0;i<lists.length;i++)
        {
            if(await lists[i].getText()==="India")
            {
                await lists[i].click()
            }
        }
        await browser.pause(4000)
    })

    it("mouse hover and scollIntoView",async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.maximizeWindow()
        // should scoll down such that element should be visible in the viewport
        await $("//td[.='Write effective QA Resume that will turn to interview call']").scrollIntoView()
        await browser.pause(2000)
        const button=await $("#mousehover")
        await browser.pause(2000)
        await button.moveTo()
        await browser.pause(2000)
        await $("//a[.='Top']").click()

    })

    xit("handling alert popup",async()=>{
        await browser.url("https://only-testing-blog.blogspot.com/")
        await browser.maximizeWindow()
        await $("//a[.='Selectable']").scrollIntoView()
        await browser.pause(2000)
        await $("//button[.='Double-Click Me To See Alert']").doubleClick()
        let text=await browser.getAlertText()
        console.log(text);
        await browser.pause(3000)
        console.log(await browser.isAlertOpen())
        await browser.pause(2000)//???????

    })
})