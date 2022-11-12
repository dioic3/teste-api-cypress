//verbo/metodo - endpoint . motivo(request) .extensao
/// <reference types="cypress" />
const payloadBook = require('../payloads/add-book.json')
function addBooks(){
    //cy.request - client http
    return cy.request({
        method: "POST",
        url: 'Books',
        failOnStatusCode: false,
        body: payloadBook
    })
}
export {addBooks};