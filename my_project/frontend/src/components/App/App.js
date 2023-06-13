import React from "react";
import './App.css';
import BookList from '../BookList/BookList';

function App() {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="#">BookSwap</a>
        </div>
        <ul className="nav-links">
          <li><a href="#">Users</a></li>
          <li><a href="#">Books</a></li>
          <li><a href="#">Search</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Welcome to BookSwap</h1>
        <button className="add-book-button">Add New Book</button>
      </header>
      <main>
        <h2>BOOKS AVILIABLE</h2>
        <BookList />
      </main>
    </div>
  );
}

export default App;