import {  Then, When } from "@cucumber/cucumber";
import  { base } from '../pages/Basepage';
import HomePage from "../pages/HomePage";


When("I am launching url into GitLab", async function () {
    await base.productNavigate();
});


When("I enter username and password and click on login button", async function () {    
    await base.productUserandPassword();
});

When("I click on the "+" icon", async function () {    
    await HomePage.clickOnProjectNewButton();

});

When("I should see the project in the dashboard", async function () {    
    
});


When(`I click on {string}`, (arg0: string) => {
    // [When] Describes the action or event that triggers the scenario.
});

When(`I select the required label {string}`, (arg0: string) => {
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


When(`I click on the {string} icon`, (arg0: string) => {
    // [When] Describes the action or event that triggers the scenario.
});

When(`I click on {string} icon`, async (icon: string) => {
});

When(`I click on {string}`, async (buttonText: string) => {
});

When(`I select {string}`, async (option: string) => {
});



When(`I select {string} project`, async (projectType: string) => {
});

Then(`The project should be successfully created and land on the project page`, async () => {
});
