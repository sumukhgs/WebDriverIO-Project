describe("Browser related ToHaveMethods",async()=>{
    it("tohaveUrl method",async()=>{
        await browser.url("https://www.google.com/")
        await expect(browser).toHaveUrl("https://www.google.com/")
    })

    it("tohaveUrlContaining method",async()=>{
        await browser.url("https://www.google.com/")
        await expect(browser).toHaveUrlContaining("google")
    })

    it("tohaveTitle method",async()=>{
        await browser.url("http://www.google.com/")
        await expect(browser).toHaveTitle("Google")
    })

    it("tohaveTitleContaining method",async()=>{
        await browser.url("http://www.google.com/")
        await expect(browser).toHaveTitleContaining("Goo")
    })
})