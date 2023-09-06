describe("Practise login Page",async()=>{
    xit("Login by entering Valid Credentials",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await browser.pause(2000)
        await $("//input[@id='username']").setValue("rahulshettyacademy")
        await $("//input[@id='password']").setValue("learning")
        await $("//input[@id='terms']").click()
        await browser.pause(2000)
        await $("//input[@id='signInBtn']").click()
        //wait until the checkout page is displayed
        await $("//a[@class='nav-link btn btn-primary']").waitForExist()
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining("shop")
        await console.log("successfull")
    })

    xit("handling radio button",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await browser.pause(2000)
        await $("//input[@id='username']").setValue("rahulshettyacademy")
        await $("//input[@id='password']").setValue("learning")
        //handling radio button when we have multiple elements
        //here it returns two matchs which we store in variable and access the second required element by accessing the index 
        //"LOCATOR CHAINING IS ALSO POSSIBLE"
        const radioButtons=await $$("//span[@class='radiotextsty']")
        const userButton=radioButtons[1]
        await userButton.click()
        await browser.pause(2000)
    })

    xit("catching multiple elements",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await browser.pause(3000)
        const links=await $$("//a")
        console.log(links.length)
        browser.pause(2000)
    })

    xit("handling popup in the login page",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await browser.pause(2000)
        await $("//input[@id='username']").setValue("rahulshettyacademy")
        await $("//input[@id='password']").setValue("learning")
        await browser.pause(1500)
        const radioButtons=await $$("//span[@class='radiotextsty']")
        const userButton=radioButtons[1]
        await userButton.click()
        const popup=await $(".modal-body") 
        await popup.saveScreenshot("new.png")
        await console.log(popup.isDisplayed())
        await popup.waitForDisplayed()
        await browser.saveScreenshot("PopupScreenShot.png")
        await $("#okayBtn").click()
        await console.log(popup.isDisplayed());
        await browser.pause(2000)
    })

    it("to handle Dropdown",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await browser.pause(2000)
        await $("//input[@id='username']").setValue("rahulshettyacademy")
        await $("//input[@id='password']").setValue("learning")
        const dropdown=await $("//select[@class='form-control']")
        //await dropdown.selectByIndex(2)
        await dropdown.selectByAttribute('value','teach')
        console.log(await dropdown.getText())
        await browser.pause(4000)

    })
})