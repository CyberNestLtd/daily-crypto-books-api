import { Request, Response, NextFunction } from "express";
import Book from "../models/book.model";

// ✅ Create a new book
export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, author, genre, year } = req.body;

    // Create book
    const book = await Book.create({
      name,
      author,
      genre,
      year,
    });

    res.status(201).json({
      message: "Book created successfully",
      book,
    });
  } catch (error) {
    next(error);
  }
};

// ✅ Edit an existing book
export const editBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, author, genre, year } = req.body;

    // Find and update book
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { name, author, genre, year },
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    next(error);
  }
};

// ✅ Delete a book
export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    next(error);
  }
};

//fetch all books
export const fetchBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await Book.find();
        if (!books) {
            return res.status(404).json({ books: [] });
        }
    
        res.json({
            books: books,
        });
    } catch (error) {
      next(error);
    }
  };

  export const getBookById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params; // Get book ID from URL params
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(book);
    } catch (error) {
        next(error);
    }
};