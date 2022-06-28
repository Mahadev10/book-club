import React, { useState, useEffect } from "react";
// components
import BooksContainer from "./components/BooksContainer";
import Header from "./components/Header";
import DetailPanel from "./components/DetailPanel";
import Search from "./components/Search";
import { GlobalStyle } from "./styles";
import { useSwitchTransition } from "transition-hook";
const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPanel, setShowPanel] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const transition = useSwitchTransition(showPanel, 300);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bookclub-json.herokuapp.com/store/books/"
        );
        const books = await response.json();
        setBooks(books);
        setFilteredBooks(books);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);
  const pickBook = (book) => {
    setShowPanel(true);
    setSelectedBook(book);
  };
  const closePanel = () => {
    setShowPanel(false);
  };
  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, term) => {
     return bookAttribute.toLowerCase().includes(term.toLowerCase());
    };
    if (!searchTerm) {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter(
          (book) =>
            stringSearch(book.title, searchTerm) ||
            stringSearch(book.author, searchTerm)
        )
      );
    }
  };
  const   hasFiltered=filteredBooks.length !== books.length;
  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks}/>
      </Header>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered?"Search results":"All books"}
      />
      {transition((state, stage) =>
        state ? (
          <DetailPanel
            book={selectedBook}
            closePanel={closePanel}
            stage={stage}
          />
        ) : (
          <></>
        )
      )}
    </>
  );
};

export default App;
