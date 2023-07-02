import contactPage from "../../pageObject/contactPage"
const textContact = require("../../fixtures/data.json")

describe("Testing Contact Menu Scenario", () => {
    const contactPg = new contactPage
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/")
    })
    it("TC-ContactMenu-01 - access contact menu page", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        cy.wait(1000)
        cy.screenshot({capture:'runner'})

    })

    it("TC-ContactMenu-02 - succesffuly send message with valid  data", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        contactPg.inputEmail(textContact.validEmail)
        contactPg.inputName(textContact.validName)
        contactPg.inputMsg(textContact.validMsg)
        contactPg.clickBtnSend()
        cy.on("window:alert", (txt) => {
            expect(txt).to.contains("Thanks for the message!!")
        })
        cy.wait(1000)
        cy.screenshot({capture:'runner'})
    })

    it("TC-ContactMenu-03 - failed send message with invalid email", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        contactPg.inputEmail(textContact.invalidEmail)
        contactPg.inputName(textContact.validName)
        contactPg.inputMsg(textContact.validMsg)
        contactPg.clickBtnSend()
        cy.on("window:alert", (txt) => {
            expect(txt).to.contains("Thanks for the message!!")
        })
        cy.wait(1000)
        cy.screenshot({capture:'runner'})
    })

    it("TC-ContactMenu-04 - failed send message without fill field contact email", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        contactPg.inputName(textContact.validName)
        contactPg.inputMsg(textContact.validMsg)
        contactPg.clickBtnSend()
        cy.on("window:alert", (txt) => {
            expect(txt).to.contains("Thanks for the message!!")
        })
        cy.wait(1000)
        cy.screenshot({capture:'runner'})
    })

    it("TC-ContactMenu-05 - failed send message without fill field contact name", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        contactPg.inputEmail(textContact.validEmail)
        contactPg.inputMsg(textContact.validMsg)
        contactPg.clickBtnSend()
        cy.on("window:alert", (txt) => {
            expect(txt).to.contains("Thanks for the message!!")
        })
        cy.wait(1000)
        cy.screenshot({capture:'runner'})
    })

    it("TC-ContactMenu-06 - failed send message without fill field message", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        contactPg.inputEmail(textContact.validEmail)
        contactPg.inputName(textContact.validName)
        contactPg.clickBtnSend()
        cy.on("window:alert", (txt) => {
            expect(txt).to.contains("Thanks for the message!!")
        })
        cy.wait(1000)
        cy.screenshot({capture:'runner'})
    })

    it("TC-ContactMenu-07 - failed send message without input all field", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        cy.wait(1000)
        contactPg.clickBtnSend()
        cy.on("window:alert", (txt) => {
            expect(txt).to.include("Thanks for the message!!")
        })
        cy.wait(1000)
        cy.screenshot({capture:'runner'})
    })

    it("TC-ContactMenu-08 - Cancel Send New Message", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        contactPg.inputEmail(textContact.validEmail)
        contactPg.inputName(textContact.validName)
        contactPg.inputMsg(textContact.validMsg)
        contactPg.clickBtnClose() // Cancel send new message
        contactPg.modalNotVisible() // Verify Modal sudah tidak tampil
        cy.wait(1000)
        cy.screenshot({capture:'runner'})    
    })
 
})

