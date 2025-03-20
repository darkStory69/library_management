const Book = require("../models/Book");

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const { title, author, isbn, quantity } = req.body;
    const book = new Book({ title, author, isbn, quantity });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Borrow a book
exports.borrowBook = async (req, res) => {
  try {
    const { bookId, userId } = req.params;
    const book = await Book.findById(bookId);
    if (!book || book.quantity === 0) {
      return res.status(400).json({ error: "Book not available" });
    }
    book.quantity -= 1;
    await book.save();
    // Add book to user's borrowedBooks array (not shown here)
    res.status(200).json({ message: "Book borrowed successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Return a book
exports.returnBook = async (req, res) => {
  try {
    const { bookId, userId } = req.params;
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ error: "Book not found" });
    book.quantity += 1;
    await book.save();
    // Remove book from user's borrowedBooks array (not shown here)
    res.status(200).json({ message: "Book returned successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
