import React from 'react';
import './Book.css';

function Book(props) {
  return (
    <div className="book">
      <h2 className="book-title">{props.title}</h2>
      <p className="book-owner">Owner: {props.owner}</p>
      <p className="book-description">{props.description}</p>
    </div>
  );
}

export default Book;