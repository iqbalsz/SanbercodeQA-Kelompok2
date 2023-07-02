class contactPage{
    menuContact = "[data-target='#exampleModal']"
    modalContent = "#exampleModal .modal-content"
    modalLabel = "#exampleModalLabel"
    modalSendBtn = "[onclick='send()']"
    modalCloseBtn = "#exampleModal .btn-secondary"
    fieldEmail = "#recipient-email"
    fieldName = "#recipient-name"
    fieldMsg = "#message-text"
    

    clickContactMenu(){
        cy.get(this.menuContact).click()
    }
    modalContentMsg(){
        cy.get(this.modalContent)
        .should("be.visible")
        .and("include.text", "New message")
    }
    modalSendBtnMsg(){
        cy.get(this.modalSendBtn)
        .should("be.visible")
        .and("include.text", "Send message")
    }
    inputEmail(eml){
        cy.get(this.fieldEmail).type(eml)
    }
    inputName(nm){
        cy.get(this.fieldName).type(nm)
    }
    inputMsg(ms){
        cy.get(this.fieldMsg).type(ms)
    }
    clickBtnSend(){
        cy.get(this.modalSendBtn)
        .click()
    }
    clickBtnClose(){
        cy.get(this.modalCloseBtn)
        .click()
    }
    modalNotVisible(){
        cy.get(this.modalContent)
        .should("not.be.visible")
    }

}


export default contactPage