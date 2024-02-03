Feature: Portal Login Page

    # Scenario: Login using valid credentials
    #     Given I access the Webdriveruni Login Portal Page
    #     When I enter a username webdriver
    #     And I enter a password webdriver123
    #     And I click on login button
    #     Then I should be presented with the following message validation succeeded

    # Scenario: Login using invalid username
    #     Given I access the Webdriveruni Login Portal Page
    #     When I enter a username webdriver555
    #     And I enter a password webdriver123
    #     And I click on login button
    #     Then I should be presented with the following message validation failed

    # Scenario: Login using invalid password
    #     Given I access the Webdriveruni Login Portal Page
    #     When I enter a username webdriver
    #     And I enter a password webdriver345
    #     And I click on login button
    #     Then I should be presented with the following message validation failed

    Scenario Outline:Test Login Via Login Portal
        Given I access the Webdriveruni Login Portal Page
        When I enter a username <username>
        And I enter a password <password>
        And I click on login button
        Then I should be presented with the following message <message>

        Examples:
            | username     | password     | message              |
            | webdriver    | webdriver123 | validation succeeded |
            | webdrive555  | webdriver123 | validation failed    |
            | webdriver    | webdriver345 | validation failed    |
            | webdriver123 | webdriver456 | validation failed    |
            | ""           | webdriver123 | validation failed    |
            | webdriver    | ""           | validation failed    |
            | ""           | ""           | validation failed    |

