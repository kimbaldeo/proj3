# Library-Catalog
[Hosted on Netlify](https://libcatalogue.netlify.app/)


## Project Description 
The Library Catalogue, uses [Google Books API](https://developers.google.com/books) to access a listing of books available and render information about each book. From that listing, you can find more works by the same author and add to a personal bookshelf.

## User Stories
As a user, I will be able to:
1. see a list of published books
2. access information on each book such as author, published date, etc. 
3. access a list of all books published under a particular name
4. access a personal bookshelf

In forthcoming iterations, I will be able to:
1. improve search and author's books functionality
2. create shelves like: books currently reading and favorite books
3. functioning add book to shelf feature


## Wireframes
### Main Page
![main page](https://i.imgur.com/1p7YyG5.png)
### Book Page
![a book page](https://i.imgur.com/yIxPl5V.png)
### Author List
![Author List](https://i.imgur.com/Xs1rb1s.png)
### User Shelf
![user shelf](https://i.imgur.com/o1kLyQs.png)
### Search Results
![search results](https://i.imgur.com/rBfkuQT.png)

## Technologies/Methods
- Javacript
- CSS Grid
- React
- RegEx
- MongoDB/Mongoose  

### Code Snippet
```
function OneBook() {
    let author = theBook.volumeInfo.authors[0]
    let authorLink = author.replace(/\s+/g, "+")

    <h3><Link to = {`/author/${authorLink}`}>{author}</Link></h3>

function Author() {
    let {author} = useParams()

    const fetchURL = `https://books.googleapis.com/books/v1/volumes?q=inauthor:${author}&maxResults=40&langRestrict=en&orderBy=relevance&printType=BOOKS&key=${config.apiKey}`
    ...
    return (
        <h1>Written by {author.replace("+", " ")}</h1>
```
