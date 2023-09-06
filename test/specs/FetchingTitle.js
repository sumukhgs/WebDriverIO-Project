//the TS -open the application ,fetch the title and assertion is done to check the fetch title with expected title
describe('opening the Application',()=>{
    it("launch the website",async()=>{

        await browser.url("https://webdriver.io/")
        await expect(browser).toHaveTitle("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO")
    })
})