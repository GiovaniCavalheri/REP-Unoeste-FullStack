const booksModel = require("../models/booksModel");

const booksController = {
  listAllBooks(req, res) {
    let books = booksModel.getAllBooks();
    res.render("allBooks", { lista: books });
  },

  showBook(req, res) {
    let bookId = parseInt(req.params.id);
    let bookById = booksModel.getBookById(bookId);
    res.render("bookDetails", { book: bookById });
  },

  renderNewBook(req, res) {
    res.render("renderBook");
  },

  saveNewBook(req, res) {
    let nameBook = req.body.nameBook;
    let authorBook = req.body.authorBook;
    let novoLivro = booksModel.createNewBook(nameBook, authorBook);
    booksModel.saveNewBook(novoLivro);
    res.render("/books");
  },

  emprestarLivro(req, res) {
    let id = parseInt(req.params.id);
    try {
      booksModel.brandDisponible(id);
      res.redirect(`/books/${id}`);
    } catch (err) {
      let book = booksModel.getBookById(id);
      res.render("bookDetails", {
        book: book,
        message: "Não foi possível emprestar: livro já está emprestado.",
      });
    }
  },
};

module.exports = booksController; 
