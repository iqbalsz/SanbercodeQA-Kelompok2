import contactPage from "../../pageObject/contactPage"
const textContact = require("../../fixtures/data.json")

describe("Testing Contact Menu Scenario", () => {
    const contactPg = new contactPage
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/")
    })
    it("As an user, i can access contact menu page", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
    })

    it("As an user, i succesffuly send message with valid  data", () => {
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
    })

    it("As an user, i failed send message with invalid email", () => {
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
    })

    it("As an user, i failed send message without fill field contact email", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        contactPg.inputName(textContact.validName)
        contactPg.inputMsg(textContact.validMsg)
        contactPg.clickBtnSend()
        cy.on("window:alert", (txt) => {
            expect(txt).to.contains("Thanks for the message!!")
        })
    })

    it("As an user, i failed send message without fill field contact name", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        contactPg.inputEmail(textContact.validEmail)
        contactPg.inputMsg(textContact.validMsg)
        contactPg.clickBtnSend()
        cy.on("window:alert", (txt) => {
            expect(txt).to.contains("Thanks for the message!!")
        })
    })

    it("As an user, i failed send message without fill field message", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        contactPg.inputEmail(textContact.validEmail)
        contactPg.inputName(textContact.validName)
        contactPg.clickBtnSend()
        cy.on("window:alert", (txt) => {
            expect(txt).to.contains("Thanks for the message!!")
        })
    })

    it("As an user, i failed send message without input all field", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        contactPg.clickBtnSend()
        // cy.wait(1000)
        cy.on("window:alert", (txt) => {
            expect(txt).to.include("Thanks for the message!!")
        })
    })

    it("As an user, i can Cancel Send New Message", () => {
        contactPg.clickContactMenu() // Masuk Menu Contact
        contactPg.modalContentMsg() // Verify Modal tampil dan Tittle Modal
        contactPg.modalSendBtnMsg() // Verify text button send di Modal
        contactPg.inputEmail(textContact.validEmail)
        contactPg.inputName(textContact.validName)
        contactPg.inputMsg(textContact.validMsg)
        contactPg.clickBtnClose() // Cancel send new message
        contactPg.modalNotVisible() // Verify Modal sudah tidak tampil
    })
    
})

