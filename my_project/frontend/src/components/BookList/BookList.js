import React from 'react';
import Book from '../Book/Book'
import './BookList.css';

function BookList() {

    const booksList = [
        {
        id: 1,
        title: 'The Great Gatsby',
        owner: 'John Smith',
        description:
            'The story primarily concerns the young and mysterious millionaire'
        },
        {
        id: 2,
        title: 'To Kill a Mockingbird',
        owner: 'Jane Doe',
        description:
            "The novel is renowned for its warmth and humor"
        },
        {
        id: 3,
        title: 'Pride and Prejudice',
        owner: 'Bob Johnson',
        description:
            'The novel follows the character development of Elizabeth Bennet'
        }
    ]

    const books = booksList.map(book => (
        <Book
        key={book.id}
        title={book.title}
        owner={book.owner}
        description={book.description}
        />
    ));

    return (
        <div className="book-list-container">
            <div className="book-list">{books}</div>
        </div>
    )
}

export default BookList;