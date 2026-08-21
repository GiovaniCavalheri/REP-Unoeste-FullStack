let libraryBooks = [
  {
    id: 1,
    nameBook: "Clean Arc",
    author: "Cleans Code Miat",
    disponible: true,
  },
  {
    id: 2,
    nameBook: "Clean Arc C#",
    author: "Cleans Code Miat - Dev C#",
    disponible: true,
  },
];

const booksModel = {
  getAllBooks() {
    return libraryBooks;
  },

  getBookById(id) {
    const searchBook = libraryBooks.find((book) => book.id === id);
    return searchBook;
  },

  createNewBook(nameBook, author) {
    let newBook = 
      {
        id: Date.now().toString(),
        nameBook: nameBook,
        author: author,
        disponible: true,
      };
    return newBook; 
  },

  saveNewBook(newBook) {
    libraryBooks.push(newBook);
  },

  brandDisponible(id) {
    let book = libraryBooks.find((book) => book.id === id);
    if (book.disponible) {
      book.disponible = false;
    } else 
        throw new Error("Não foi possível concluir esse método")
  },
};

module.exports = booksModel;
