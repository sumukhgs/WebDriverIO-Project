class HopeStarInsuranceSearchPage
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

    get NomoineeModule()
    {
        return $("//a[@href='nominee.php']")
    }

    get PaymentModule()
    {
        return $("//a[@href='payment.php")
    }
    
    get ClientStatusLink()
    {
        return $("(//a[@href='clientStatus.php?client_id=1511987599'])[1]")
    }

    async ClickOnClientLink()
    {
        await this.ClientStatusLink.click()
    }
}
export default new HopeStarInsuranceSearchPage()