import './App.css';
import config from "./config.json"
import React from 'react';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import Nav from './components/nav';
import Header from './components/header';
import Library from './pages/allBooks';
import OneBook from './pages/book';
import Author from './pages/author'
import Results from "./pages/results";
import Bookshelf from './pages/bookShelf';

function App() {
  // getting books for Main Page
  const [books, setBooks] = useState([])
  const [currentPage, setcurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const startIndex = currentPage * 40;
  const fetchVolumesURL = `https://books.googleapis.com/books/v1/volumes?q=""&maxResults=40&langRestrict=en&orderBy=newest&printType=BOOKS&startIndex=${startIndex}&key=${config.apiKey}`

  function getBooks() {
      fetch(fetchVolumesURL)
      .then((res) =>  res.json())
      .then(json =>  {
        setBooks([...json.items]);
        setPageCount(Math.ceil(json.totalItems / 40));
        setIsLoaded(true);
      })
      .catch(error => console.error('Error', error));
  }

  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected);
    getBooks();
  };

  useEffect(() => {
      getBooks()
  }, [])

  // // adding books to shelf
  // function addBook() {

  // }

  return (
    <>
      <Nav />
      <Header />
      <div className="App">
        <Routes>
          <Route path = "/" element = {<Library books = {books} isLoaded = {isLoaded} handlePageChange = {handlePageChange} pageCount = {pageCount}/>} />
          <Route path = "/shelf" element = {<Bookshelf />} />
          <Route path = "/books/:id" element = {<OneBook books = {books} />} />
          <Route path = "/author/:author" element = {<Author />} />
          <Route path = "/search/:results" element = {<Results />} />
        </Routes>
      </div>
    </>
  );
}

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default App;
