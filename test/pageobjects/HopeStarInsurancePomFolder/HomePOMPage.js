class HopeStarInsuranceHomePage
{
    get ClientModule()
    {
        return $("//a[@href='client.php']")
    }

    get AgentModule()
    {
        return $("//a[@href='agent.php']")
    }

    get PolicyModule()
    {
        return $("//a[@href='policy.php']")
    }

    get NomineeModule()
    {
        return $("//a[@href='nominee.php']")
    }

    get PaymentModule()
    {
        return $("//a[@href='payment.php")
    }

    get SearchBtn()
    {
        return $("//input[@class='searchBtn']")
    }

    get SearchBar()
    {
        return $("//input[@type='text']")
    }

    get LogOut()
    {
        return $("//a[@href='logout.php']")
    }

    async ClickOnClientModule()
    {
        await this.ClientModule.click()
    }

    async ClickOnAgentModule()
    {
        await this.AgentModule.click()
    }

    async ClickOnPaymentModule()
    {
        await this.PaymentModule.click()
    }

    async ClickOnNomineeModule()
    {
        await this.NomineeModule.click()
    }

    async SearchForClient(val)
    {
        await this.SearchBar().setValue(val)
        await this.SearchBtn().click()
    }

}
export default new HopeStarInsuranceHomePage()