import express from 'express';
import pg from 'pg';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Routes
app.get('/', async (req, res) => {
    try {
        let query = "SELECT * FROM books";
        const sort = req.query.sort || 'title';
        
        switch(sort) {
            case 'rating':
                query += " ORDER BY rating DESC";
                break;
            case 'date':
                query += " ORDER BY read_date DESC";
                break;
            default:
                query += " ORDER BY title";
        }

        const result = await db.query(query);
        res.render('index', { books: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching books');
    }
});

app.get('/books/new', (req, res) => {
    res.render('new-book', { isHome: false });
});

app.post('/add', async (req, res) => {
    const { title, author, isbn, read_date, rating, review } = req.body;
    try {
        await db.query(
            'INSERT INTO books (title, author, isbn, read_date, rating, review) VALUES ($1, $2, $3, $4, $5, $6)',
            [title, author, isbn, read_date, rating, review]
        );
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding book');
    }
});

app.post('/edit', async (req, res) => {
    const id = req.body.updatedItemId;
    try {
        const result = await db.query('SELECT * FROM books WHERE id = $1', [id]);
        if (result.rows.length > 0) {
            res.render('edit-book', { book: result.rows[0] });
        } else {
            res.status(404).send('Book not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching book');
    }
});

app.post('/update', async (req, res) => {
    const { id, title, author, isbn, read_date, rating, review } = req.body;
    try {
        await db.query(
            'UPDATE books SET title = $1, author = $2, isbn = $3, read_date = $4, rating = $5, review = $6 WHERE id = $7',
            [title, author, isbn, read_date, rating, review, id]
        );
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating book');
    }
});

app.post('/delete', async (req, res) => {
    const id = req.body.deleteItemId;
    try {
        // First delete all notes associated with the book
        await db.query('DELETE FROM notes WHERE book_id = $1', [id]);
        // Then delete the book
        await db.query('DELETE FROM books WHERE id = $1', [id]);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting book');
    }
});

app.get('/books/:id', async (req, res) => {
    try {
        const bookResult = await db.query('SELECT * FROM books WHERE id = $1', [req.params.id]);
        const notesResult = await db.query('SELECT * FROM notes WHERE book_id = $1 ORDER BY created_at DESC', [req.params.id]);
        
        if (bookResult.rows.length > 0) {
            res.render('book-detail', { 
                book: bookResult.rows[0],
                notes: notesResult.rows
            });
        } else {
            res.status(404).send('Book not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching book details');
    }
});

app.post('/books/:id/notes', async (req, res) => {
    try {
        const { chapter, note_text, is_key_takeaway } = req.body;
        
        if (!note_text || !note_text.trim()) {
            return res.status(400).json({ error: 'Note text is required' });
        }

        await db.query(
            'INSERT INTO notes (book_id, chapter, note_text, is_key_takeaway) VALUES ($1, $2, $3, $4)',
            [req.params.id, chapter || null, note_text.trim(), is_key_takeaway || false]
        );
        res.status(200).json({ message: 'Note added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add note' });
    }
});

app.delete('/notes/:id', async (req, res) => {
    try {
        const result = await db.query('SELECT book_id FROM notes WHERE id = $1', [req.params.id]);
        const bookId = result.rows[0].book_id;
        await db.query('DELETE FROM notes WHERE id = $1', [req.params.id]);
        res.redirect(`/books/${bookId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting note');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});