import config from "../config.json"
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';


function Author() {
    let {author} = useParams()

    const fetchURL = `https://books.googleapis.com/books/v1/volumes?q=inauthor:${author}&maxResults=40&langRestrict=en&orderBy=relevance&printType=BOOKS&key=${config.apiKey}`
    console.log("author: " + author)
    
    const [books, setBooks] = useState([])

    function getBooks() {
        fetch(fetchURL)
        .then((res) => res.json())
        .then((res) => (setBooks(res.items)))
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <>
            <div className = 'results'>
            <h1>Written by {author.replace("+", " ")}</h1>
            { books ? books.map((book, idx) => (
                <div key = {idx}>
                    <h3>{book.volumeInfo.title}</h3>
                </div>
            )) : <h2>Loading...</h2>}
            </div>
        </>
    )
}

export default Author