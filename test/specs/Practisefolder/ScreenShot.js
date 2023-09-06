describe('Taking ScreenShot',()=>{
    it('i am taking screenshot',async()=>{
        await browser.url("https://demowebshop.tricentis.com/")       
        await browser.maximizeWindow()
        // let computer=await $('//div[@class="header-menu"]/descendant::li[2]')
        // await computer.moveTo()
        // await browser.pause(5000)
        // await $('(//a[@href="/accessories"])[1]').click()
        // await browser.pause(3000)
        // await $('#products-orderby').selectByVisibleText()

    })
})