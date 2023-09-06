describe("hopestar Insurance",()=>{
    it('login to application',async()=>{
       await browser.url('http://rmgtestingserver/domain/Life_Insurance_Management_System/')
       await $('[name="username"]').setValue("555")
       await browser.pause(2000)
       (await $('[name="password"]')).setValue("666")
       await browser.pause(2000)
       

    })
})