const express = require("express");
const bookController = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, bookController.addBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.post(
  "/borrow/:bookId/:userId",
  authMiddleware,
  bookController.borrowBook
);
router.post(
  "/return/:bookId/:userId",
  authMiddleware,
  bookController.returnBook
);

module.exports = router;
