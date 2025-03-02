Feature: API Testing

  Scenario: Test issue creation via API
    Given I have a valid API token
    WhenI send a POST request to "https://gitlab.com/api/v4/projects/<Project_ID>/issues"
    And I provide the following issue details:
      | Field       | Value              |
      | Title       | <Issue Title>       |
      | Description | <Issue Description> |
      | Labels      | <Issue Labels>      |
    Then The issue should be successfully created in the API response
