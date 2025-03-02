Feature: Issue Boards Management

  Scenario: Test creating a new column
    Given I am launching url into GitLab
    And I enter username and password and click on login button
    When I click on "Plan"
    And I click on "Issue Boards"
    And I click on "New List"
    And I select the required label "<Label Name>"
    And I click "Add to Board"
    Then The column should be added to the board

  Scenario: Test changing the position of a column
    Given I am launching url into GitLab
    And I enter username and password and click on login button
    When I click on "Plan"
    And I click on "Issue Boards"
    And I drag and drop the column "<Column Name>" to the desired position
    Then The column should be successfully repositioned

  Scenario: Test creation of a new label
    Given I am launching url into GitLab
    And I enter username and password and click on login button
    When I click on "Manage"
    And I click on "Labels"
    And I click on "New Label" button
    And I fill in the following details:
    And I click "Create Label"
    Then The label should be successfully created

  Scenario: Test search functionality for labels
    Given I am launching url into GitLab
    And I enter username and password and click on login button
    When I click on "Manage"
    And I click on "Labels"
    And I enter "<Label Name>" in the search bar
    And I press Enter
    Then The searched label "<Label Name>" should be listed
