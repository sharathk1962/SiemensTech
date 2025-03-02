import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

let apiToken: string;
let response: any;

Given(`I have a valid API token`, async function () {
    apiToken = process.env.GITLAB_API_TOKEN as string; // Ensure the token is set in environment variables
    expect(apiToken).to.not.be.undefined;
});

When(`I send a POST request to "{string}"`, async function (endpoint: string) {
    this.apiEndpoint = endpoint.replace('<Project_ID>', process.env.PROJECT_ID as string);
});

When(`I provide the following issue details:`, async function () {


    try {
        
    } catch (error: any) {
        response = error.response;
    }
});

Then(`The issue should be successfully created in the API response`, async function () {
    expect(response.status).to.equal(201);
    expect(response.data.title).to.equal('Test Issue'); // Replace with actual title
});
