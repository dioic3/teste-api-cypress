const payloadPut = require('../payloads/change-book.json')
function changeBooks(id){
    return cy.request({
        method:'PUT',
        url: `Books/${id}`,
        hearders:{
            'Content-Type': 'application/json',
        },
        failOnStatysCode: false,
        body: payloadPut
    })
}
export {changeBooks};