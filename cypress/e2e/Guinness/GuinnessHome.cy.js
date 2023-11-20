/// <reference types="cypress" />

const testCases = [
    {
        testName: 'Test with Date of Birth',
        dateOfBirth: { day: '24', month: '05', year: '1996' },
        searchQuery: 'Guinness',
    },

    {
        testName: 'Test with Date of Birth Invalid',
        dateOfBirth: { day: '24', month: '10', year: '2008' },
        searchQuery: 'Guinness',
    },

    {
        testName: 'Test case QUILMES',
        dateOfBirth: { day: '24', month: '10', year: '1996' },
        searchQuery: 'Quilmes',
    },
];

testCases.forEach((testCase) => {
    it(testCase.testName, () => {
        cy.visit('https://www.guinness.diageo.site/en/home');

//         cy.get(this.element.BENEFIT_TYPE_COUNTRY).should('be.visible');
//         cy.get(this.element.BENEFIT_TYPE_COUNTRY)
//             .find('td')
//             .then((td) => {
//                 // synchronously find the target element
//                 if (td.text().includes(value)) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             })
//             .then((found) => {
//                 if (found) {
//                     return cy.log(`found value "${value}"`);
//                 } else {
//                     cy.get(this.element.NEXT_PAGE_BUTTON).then(($btn) => {
//                         if (!$btn.is(':disabled')) {
//                             cy.wrap($btn).click();
//                             // then, recurse
//                             return this.searchThroughPages(value);
//                         }
//                     });
//                 }
//             });
// 11:35
// cy.get(elemento que existe si o si en la pagina).should('be.visible');
//         cy.get(elemento que existe si o si en la pagina)
//             .find('div')
//             .then((div) => {
//                 // synchronously find the target element
//                 if (div.text().includes('Accept all cookies')) {
//                     codigo para pasar el age gate
//                 } else {
//                     continuo con mi test
//                 }
//             })

        cy.fillDateOfBirth('[placeholder="DD"]',testCase.dateOfBirth.day);
        cy.fillDateOfBirth('[placeholder="MM"]',testCase.dateOfBirth.month);
        cy.fillDateOfBirth('[placeholder="YYYY"]',testCase.dateOfBirth.year);
        cy.contains('Enter').click();
        cy.doSearch(testCase.searchQuery);
    });
});