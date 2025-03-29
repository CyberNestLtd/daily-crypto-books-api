import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import { createBook, deleteBook, editBook, fetchBooks, getBookById } from '../controllers';

const router = Router();

router.post('/create',authenticate, createBook);
router.get('/delete/:id', authenticate, deleteBook);
router.get('/books', authenticate, fetchBooks);
router.post("/edit/:id", authenticate, editBook);
router.get("/:id", authenticate, getBookById);

export default router; 