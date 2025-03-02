Feature: Account Preferences

  Scenario: Test changing appearance settings
    Given I am launching url into GitLab
    And I enter username and password and click on login button
    When I click on the account symbol in the left corner
    And I select "Preferences" from the dropdown
    And I select "Dark" option
    Then The background should change to dark
    When I select "Light" option
    Then The background should change to white

  Scenario: Test changing navigation theme
 Given I am launching url into GitLab
    And I enter username and password and click on login button
    When I click on the account symbol in the left corner
    And I select "Preferences" from the dropdown
    And I select "Red" radio button in the navigation theme section
    Then The theme should change to red on the left top
    When I select "Neutral" radio button
    Then The theme should change to neutral
