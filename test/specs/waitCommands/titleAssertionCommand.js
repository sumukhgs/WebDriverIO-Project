describe('Usage of wait Until commands',async()=>{
    it('waitUntilText Method Demonstration',async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        let actualtitle=await browser.getTitle()
        let exptitle="LoginPage Practise | Rahul Shetty Academy"
        if(actualtitle===exptitle)
        {
            console.log("success")
        }
        else
        {
            console.log((failure));
        }
    })


    it('testing using assertion',async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        let exptitle="LoginPage Practise | Rahul Shetty Academy"
        await expect(browser).toHaveTitle(exptitle)
        console.log('succussfully tested');
    })
})