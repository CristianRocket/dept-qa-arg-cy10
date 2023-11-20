/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';
const testCases = [
    {
        testName: 'Test with Date of Birth',
        dateOfBirth: { day: '24', month: '05', year: '1996' },
        searchQuery: 'Guinness',
    },

    // {
    //     testName: 'Test with Date of Birth Invalid',
    //     dateOfBirth: { day: '24', month: '10', year: '2008' },
    //     searchQuery: 'Guinness',
    // },

    // {
    //     testName: 'Test case QUILMES',
    //     dateOfBirth: { day: '24', month: '10', year: '1996' },
    //     searchQuery: 'Quilmes',
    // },
];

testCases.forEach((testCase) => {
    it(testCase.testName, () => {
        // cy.intercept({
        //     method: 'GET',
        //     path: 'https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location',
        // }).as('pageToLoad');
       

        cy.visit('https://www.malts.com/en-gb/?agp=true');
        cy.get('[role="alertdialog"]').should('exist');
        cy.findByRole('button', { name: 'Accept All Cookies' }).click();



        // cy.fillDateOfBirth('[placeholder="DD"]',testCase.dateOfBirth.day);
        // cy.fillDateOfBirth('[placeholder="MM"]',testCase.dateOfBirth.month);
        // cy.fillDateOfBirth('[placeholder="YYYY"]',testCase.dateOfBirth.year);
        // cy.contains('Enter').click();
        // cy.doSearchMalts(testCase.searchQuery);
    });
});