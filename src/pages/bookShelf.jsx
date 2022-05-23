import { data } from '../data';

function Bookshelf() {
       
    return (
        <>
        <h1>My Bookshelf</h1>
        <div className='shelf'>
            <div>
                { data.map((data, index) => {
                    return (
                        <div key = {index}>
                            <img src = {data.volumeInfo.imageLinks.smallThumbnail} className = "allBooksCover" alt = "book cover"/>
                            <p>{data.volumeInfo.title}</p>
                        </div>
                    )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Bookshelf