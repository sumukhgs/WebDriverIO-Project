class HopeStarInsuranceClientstatusPAge
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

}