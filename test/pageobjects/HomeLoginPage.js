class HomePage
{
    openurl()
    {
        return browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    }

    get userName()
    {
        return $("//input[@id='username']")
    }

    get password()
    {
        return $("//input[@id='password']")
    }

    get termsAndCond()
    {
        return $("//input[@id='terms']")
    }

    get signInBtn()
    {
        return $("//input[@id='signInBtn']")
    }

    async enterusername(un)
    {
        await this.userName.setValue(un)
    }

    async enterpassword(pwd)
    {
        await this.password.setValue(pwd)
    }

    async clickOnterms()
    {
        await this.termsAndCond.click()
    }

    async clickonsignin()
    {
        await this.signInBtn.click()
    }


}
export default new HomePage()