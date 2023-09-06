describe("End2End Scenario",async()=>{
    it("add items and checkout the kart and finally order the items",async()=>{
        const phones=['Samsung Note 8','Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await $("input[id='username']").setValue("rahulshettyacademy")
        await browser.pause(2000)
        await $("input[id='password']").setValue("learning")
        await browser.pause(2000)
        await $("input[id='signInBtn']").click()
        await browser.pause(2000)
        let newPage= await $("nav[class='navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top']")
        await expect(newPage).toBeDisplayed()
        let cards=await $$("div[class='card h-100']")
        for(let i=0;await i<cards.length;i++)
        {
            let card=await cards[i].$("div h4 a")
            console.log(await card.getText())
            if(await phones.includes(await card.getText()))
            {
                await (await cards[i].$("div button")).click()
                await browser.pause(1000)
            }
        }
        await $("a[class='nav-link btn btn-primary']").click()
        await browser.pause(2000)
        let Productprices=await $$("//tr/td[4]/strong")
        let totalsum=(await Promise.all(await Productprices.map(async (product)=>parseInt((await product.getText()).split(".")[1].trim())))).reduce((acc,price)=>acc+price,0)
        console.log("****************************"+totalsum)
        await browser.pause(1000)
        await $("//button[@class='btn btn-success']").click()
        await $("input[id='country']").setValue("ind")
        await $("//div[@class='lds-ellipsis']").waitForExist({reverse:true})
        await $("//a[.='India']").click()
        await browser.pause(2000)
        await $("//input[@class='btn btn-success btn-lg']").click()
        

    })
})