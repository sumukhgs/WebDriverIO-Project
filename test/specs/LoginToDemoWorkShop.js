describe("DemoWorkShop WebSite",()=>{
    it("login to application",async()=>{
       await browser.url("https://demowebshop.tricentis.com/")
       await browser.maximizeWindow()
       await $('//a[text()="Log in"]').click()
       //await $('=Log in').click()
       await browser.pause(2000)
       const email=await $('#Email')
       email.addValue("sumukh.g.s.30@gmail.com")
       await browser.pause(2000)
       await $('#Password').addValue("forgot my password")
       await browser.pause(3000)
       await $('#RememberMe').click()
       await browser.pause(2000)
       await $('[class="button-1 login-button"]').click()
       await browser.pause(3000)
    })
})