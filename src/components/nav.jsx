import config from "../config.json"
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

function Nav() {
  // Search bar functions
  const [query, setQuery] = useState("");
  const[results, setResults] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
      setQuery(e.target.value)
  }

  async function doSearch(e) {
    e.preventDefault()
    try {
        const url = `https://books.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&langRestrict=en&orderBy=relevance&printType=BOOKS&key=${config.apiKey}`
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setResults(res.items);
          
        })
    }
    catch(err) {
        console.log(err)
    }
  } 

  const routeToResults = () => {
      navigate(`/search/${query}`, { state: { results: results }});
  }

    return (
    <>
        <div className = "nav">
            <div className = "Links">
                <Link to = "/" className = "navMain">
                    Main
                </Link>   
                <Link to = "/shelf" className = "navShelf">
                    My Books
                </Link>
            </div>
            <span className = "searchBar">
                <form onSubmit = {doSearch}>
                    <input type = "text" onChange = {handleChange} value = {query} className = "searchField"/>   <button className = "searchButton" onClick={routeToResults}>Find</button>
                </form>
            </span>
        </div>
        </>
    )
}

export default Nav 