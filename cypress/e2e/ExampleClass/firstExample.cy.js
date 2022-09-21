describe("rahulshettyacademy", () => {

    beforeEach('', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it.skip('Visit page', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    });


    it('Find web elements', function () {
        cy.get("input.radioButton"); //gets all
        cy.get("input.radioButton").eq(0).click() //first elem
        cy.get("#radio-btn-example label").filter(":contains('Radio3')");
    });

    it('checkbox test', function () {
        //cy.get("#checkbox-example input[type='checkbox']").click({multiple: true})
        cy.get("#checkbox-example input[type='checkbox']").check() //easiest way
        cy.get("#checkbox-example input[type='checkbox']").each(($checkbox) => {
            cy.wrap($checkbox).should('not.be.disabled').and('be.enabled')
        })
    });

    it('typing', function () {
        cy.get('#name').should('be.visible').and('be.enabled').type('Fernando Alonso', {delay: 1000})
    });

    it.only('get vs contains', function () {
        cy.get("#product tbody tr td").filter(':contains("25")').parent().each(($row) => {
            cy.wrap($row).find("td").eq(2).should('have.text', "25")
        }); //gets all matching
        cy.contains("#product tbody tr td", /^25$/).parent()
    });
})
