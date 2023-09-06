describe("Global Sample Demo page",async()=>{
    xit("To handle alert popup",async()=>{
        await browser.url("https://www.globalsqa.com/samplepagetest/")
        await $("#g2599-name").setValue("sumukh")
        await browser.pause(1500)
        await $("//input[@name='g2599-email']").setValue("sammy@gmail.com")
        await browser.pause(1500)
        await $("#g2599-website").setValue("google.com")
        await browser.pause(1500)
        await $("//input[@value='Automation Testing']").click()
        await browser.pause(2000)
        await $("//button[@onclick='myFunction()']").click()
        await browser.pause(2000)
        console.log(await browser.isAlertOpen())
        let text=await browser.getAlertText()
        console.log(text)
        await browser.acceptAlert()
        await browser.pause(2000)
    })

    xit("calender Popup",async()=>{
        await browser.url("https://www.globalsqa.com/demo-site/datepicker/")
        await browser.pause(1000)
        await $("#datepicker").click()
        await browser.pause(2000)
        await $("//a[.='25']").click()
    })

    it("rest parameter",async()=>{
        function myFun(a, b, ...manyMoreArgs) {
            console.log("a", a);
            console.log("b", b);
            console.log("manyMoreArgs", manyMoreArgs);
          }
          
          myFun("one", "two", "three", "four", "five", "six");
    })
})