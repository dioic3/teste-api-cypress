import * as PutBooks from '../request/CHANGEBooks.request'
import * as GetBooks from '../request/GETBooks.request'
import * as PostBooks from '../request/POSTBooks.request'

describe('Put Books', () => {
    it('Alterar um livro', () => {
        GetBooks.allBooks().then((resAllBooks) => {
            PutBooks.changeBooks(resAllBooks.body[0].id).should((resChangeBook) => {
                expect(resChangeBook.status).to.equal(200);
                expect(resChangeBook.body.title).to.equal('dioice');
            })
        })
    });
    
    it('Criar e alterar um livro', () => {
        PostBooks.addBooks().then((resAddBooks) => {
            PutBooks.changeBooks(resAddBooks.body.id).should((resChangeBook) => {
                expect(resChangeBook.status).to.equal(200);
                expect(resChangeBook.body.title).to.equal('dioice');
            })
        })
    });
});
