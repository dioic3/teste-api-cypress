import * as DeleteBooks from '../request/DELETEBooks.request'
import * as GetBooks from '../request/GETBooks.request'
import * as PostBooks from '../request/POSTBooks.request'
describe('Delete Books', () => {
    it('Deletar um livro', () => {
        GetBooks.allBooks().then((responseAllBooks) => {
            DeleteBooks.deleteName(responseAllBooks.body[0].id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.equal(200);
            }) 
        })
    });

    it('Criar e excluir um livro',() => {
        PostBooks.addBooks().then((resAdd) => {
            DeleteBooks.deleteName(resAdd.body.id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.equal(200);
            })
        })
    })
});