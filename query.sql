CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  isbn VARCHAR(20),
  read_date DATE,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  review TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES books(id),
  chapter VARCHAR(100),
  note_text TEXT NOT NULL,
  is_key_takeaway BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS notes (
  id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES books(id),
  chapter TEXT, note_text TEXT,
  is_key_takeaway BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);