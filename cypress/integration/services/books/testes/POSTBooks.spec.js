import * as PostBooks from '../request/POSTBooks.request'

context('POST Books', () => {
    it('Adicionr um novo livro', () => {
        PostBooks.addBooks().should(response => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq("Livro");
        })
    });
});