/// <reference types="Cypress"/>

describe('this is test for test of options', () => {
    it.skip('this is for checkbox',()=>{
cy.visit("https://codenboxautomationlab.com/practice/")
cy.get("#checkBoxOption1").check()
cy.get("#checkBoxOption2").check()
cy.get("#checkBoxOption1").should('be.checked')
cy.get("#checkBoxOption3").check()

// cy.get("#checkBoxOption2").as("option2")
// cy.get("@option2").check()
// cy.get("input[type='checkbox']").check()



    })
it.skip('this is for radiobutton',()=>{
    cy.visit("https://codenboxautomationlab.com/practice/")
    cy.get("input[type='radio']").eq(1).check()
    cy.wait(4000)
    cy.get("input[type='radio']").last().check()
    cy.wait(4000)
    cy.get("input[type='radio']").first().check()
 
})

it('this is for dropdown',()=>{
    cy.visit("https://codenboxautomationlab.com/practice/")
cy.get("#dropdown-class-example").select("Selenium")
cy.wait(4000)
cy.get("#dropdown-class-example").select("Appium")
})


});

    