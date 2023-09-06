describe("waitUntil command ",async()=>{
    it('testscript-01',async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.pause(1500)
        await $('#username').setValue('Sumukh g s')
        await browser.pause(1500)
        await $('#password').setValue('906030')
        await browser.pause(1500)
        await $('span[class="checkmark"]').click()
        await $('#signInBtn').click()
        console.log((await $('.alert alert-danger col-md-12')).getText());
        await browser.waitUntil(async()=>(await $('#signInBtn')).getAttribute('value')),
        {
            timeout:5000,
            timeoutMsg:'error msg is displayed'
        }
        await console.log((await $('.alert alert-danger col-md-12')).getText())
        await browser.pause(2500)
        await expect($("//p")).toHaveTextContaining("username is rahulshetty")
    })
})