import * as GetBooks from "../request/GETBooks.request";


describe('GET BOOKS', () => {
    it('Listar todos os livros', () => {
        GetBooks.allBooks().should((response) => {
            cy.log(response)
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null
        })
    });
});