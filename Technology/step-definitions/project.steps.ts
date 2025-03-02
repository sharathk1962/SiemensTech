import {  Then, When } from "@cucumber/cucumber";
import ProjectPage from "../pages/HomePage";



When(`I click on {string}`, (arg0: string) => {
    // [When] Describes the action or event that triggers the scenario.
    ProjectPage.clickOnNewprojectMenu();
});

When(`I enter the project details {string} and {string}`, async (field: string, value: string) => {
    ProjectPage.clickOnBlankProjectButton();
});

When(`I select the required label {string}`, (arg0: string) => {
    // [When] Describes the action or event that triggers the scenario.
});

When(`I click {string}`, (arg0: string) => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`The column should be added to the board`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

When(`I drag and drop the column {string} to the desired position`, (arg0: string) => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`The column should be successfully repositioned`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});


When(`I fill in the following details:`, async (table) => {
    const rows = table.hashes();
    for (const row of rows) {   
        const field = row.Field;
        const value = row.Value;
    }
});
Then(`The label should be successfully created`, async () => {
   
});

When(`I enter {string} in the search bar`, async () => {
    
});

When(`I press Enter`, async () => {
    
});

Then(`The searched label {string} should be listed`, async () => {
    
});
