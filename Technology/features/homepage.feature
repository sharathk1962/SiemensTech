Feature: Homepage

  @Sanity
  Scenario: Test creation of new blank project
    Given I am launching url into GitLab
    And I enter username and password and click on login button
    When I click on the "+" icon
    And I click on "New Project repository"
    And I select "Create Blank Project"
    And I enter the project details "<ProjectName>" and "<ProjectName>""
    And I select "Create project"
    Then The project should be successfully created and land on the project page

