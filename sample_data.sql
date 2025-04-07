-- Sample books
INSERT INTO books (title, author, isbn, read_date, rating, review) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', '978-0743273565', '2024-01-15', 5, 'A masterpiece of American literature. Fitzgerald''s prose is both elegant and powerful, capturing the essence of the Jazz Age.'),
('1984', 'George Orwell', '978-0451524935', '2024-02-01', 5, 'A prophetic and haunting novel that remains relevant today. Orwell''s vision of totalitarianism is both chilling and thought-provoking.'),
('Pride and Prejudice', 'Jane Austen', '978-0141439518', '2024-02-15', 4, 'A delightful exploration of love, marriage, and social class in Regency-era England. Austen''s wit and character development are exceptional.'),
('The Hobbit', 'J.R.R. Tolkien', '978-0547928227', '2024-03-01', 5, 'A charming adventure that introduces readers to Middle-earth. Tolkien''s world-building and storytelling are masterful.'),
('To Kill a Mockingbird', 'Harper Lee', '978-0446310789', '2024-03-15', 5, 'A powerful story about justice, prejudice, and growing up in the American South. Lee''s narrative voice is both innocent and profound.');

-- Sample notes for The Great Gatsby
INSERT INTO notes (book_id, chapter, note_text, is_key_takeaway) VALUES
(1, 'Chapter 1', 'Nick Carraway''s introduction sets up the theme of judgment and observation. His father''s advice about criticizing others is significant.', true),
(1, 'Chapter 2', 'The Valley of Ashes represents the moral decay of society. The billboard of Dr. T.J. Eckleburg serves as a symbol of God''s judgment.', true),
(1, 'Chapter 3', 'Gatsby''s parties reveal both his wealth and his isolation. The green light symbolizes his hope and dreams.', true);

-- Sample notes for 1984
INSERT INTO notes (book_id, chapter, note_text, is_key_takeaway) VALUES
(2, 'Part 1', 'The concept of doublethink is introduced - the ability to hold two contradictory beliefs simultaneously.', true),
(2, 'Part 2', 'Winston''s relationship with Julia represents rebellion against the Party''s control of human emotions.', true),
(2, 'Part 3', 'The Room 101 scene demonstrates the Party''s ultimate power over individual will.', true);

-- Sample notes for Pride and Prejudice
INSERT INTO notes (book_id, chapter, note_text, is_key_takeaway) VALUES
(3, 'Volume 1', 'Elizabeth''s first impression of Darcy shows her quick judgment and wit.', true),
(3, 'Volume 2', 'The letter from Darcy reveals his true character and the Wickham situation.', true),
(3, 'Volume 3', 'Elizabeth''s visit to Pemberley marks a turning point in her understanding of Darcy.', true);

-- Sample notes for The Hobbit
INSERT INTO notes (book_id, chapter, note_text, is_key_takeaway) VALUES
(4, 'Chapter 1', 'Bilbo''s character development begins with his reluctance to adventure.', true),
(4, 'Chapter 5', 'The riddle game with Gollum is crucial for both plot and character development.', true),
(4, 'Chapter 12', 'Bilbo''s bravery in confronting Smaug shows his growth as a character.', true);

-- Sample notes for To Kill a Mockingbird
INSERT INTO notes (book_id, chapter, note_text, is_key_takeaway) VALUES
(5, 'Part 1', 'The introduction of Boo Radley sets up the theme of prejudice and fear of the unknown.', true),
(5, 'Part 2', 'The trial scene reveals the deep-seated racism in Maycomb society.', true),
(5, 'Part 2', 'Atticus''s closing argument is a powerful statement about justice and equality.', true); 