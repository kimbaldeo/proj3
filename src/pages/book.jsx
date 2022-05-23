import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"


function OneBook(props) {
    let {id} = useParams()
    let theBook = props.books[id]
    let author = theBook.volumeInfo.authors[0]
    let authorLink = author.replace(/\s+/g, "+")

    return (
        <>
            <div className = "oneBook">
                <img src = {theBook.volumeInfo.imageLinks.thumbnail} className = "aBook" alt = "book cover"/>
                <h1>{theBook.volumeInfo.title}</h1>
                <h3><Link to = {`/author/${authorLink}`}>{author}</Link></h3>
                <p className = "pub">published: {theBook.volumeInfo.publishedDate}</p>
                <p className="synop">{theBook.volumeInfo.description}</p>
            </div>
            {/* <div className = "addShelf">
                <button onClick = {addBook}>+ My Books</button>
            </div> */}
        </>
    )
}

export default OneBook