const express = require("express");
const booksController = require("../controllers/booksController");
const router = express.Router();
const controller = booksController;

router.get("/books", controller.listAllBooks);
router.get("/books/new", controller.renderNewBook);
router.get("/books/:id", controller.showBook);
router.post("/books/new", controller.saveNewBook);
router.post("/books/:id/emprestar", controller.emprestarLivro);
