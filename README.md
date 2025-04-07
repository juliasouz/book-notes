# BookShelf - Your Personal Reading Tracker

BookShelf is a modern web application to manage your personal library, take notes about books, and track your reading progress.

## Features

- Complete book management (add, edit, delete)
- Book details include:
  - Title and author
  - ISBN (optional)
  - Read date
  - Rating (1-5 stars)
  - Review (optional)
- Open Library integration for automatic book covers
- Chapter-based note-taking system
- Key takeaways marking in notes
- Sort by title, rating, and read date
- Responsive and modern interface
- Light/dark theme with smooth animations
- Accessibility features including:
  - High contrast mode support
  - Reduced motion preferences
  - Keyboard navigation
  - Screen reader compatibility
  - Focus indicators
  - Semantic HTML structure

## Requirements

- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)
- NPM or Yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/bookshelf.git
cd bookshelf
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
- Create a PostgreSQL database
- Run the `query.sql` file to create the necessary tables
- Configure database credentials in the `.env` file

4. Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
bookshelf/
├── public/
│   ├── styles.css        # Global styles
│   └── js/
│       └── theme.js      # Light/dark theme management
├── views/
│   ├── index.ejs         # Home page (book list)
│   ├── book-detail.ejs   # Book details and notes
│   ├── edit-book.ejs     # Edit form
│   └── partials/
│       ├── header.ejs    # Common header
│       └── footer.ejs    # Common footer
├── index.js              # Server and routes
└── README.md
```

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - PostgreSQL
  - EJS (templates)
- **Frontend:**
  - HTML5
  - CSS3 (with CSS variables for theming)
  - JavaScript (Vanilla)
- **APIs:**
  - Open Library (for book covers)

## Interface Features

- Responsive design that works on mobile and desktop
- Light/dark theme system with smooth transitions
- Book cards with hover effects
- Accessible and well-structured forms
- Font Awesome icons for better visual experience
- Visual feedback for user interactions

## Database

The project uses two main tables:
- `books`: Stores book information
- `notes`: Stores book-related notes

## Contributing

Contributions are welcome! Feel free to:
1. Report bugs
2. Suggest new features
3. Submit pull requests

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.