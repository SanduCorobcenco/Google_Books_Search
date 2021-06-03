import React, { Component } from 'react'
import ResultListItem from "../ResultListItem/ResultListItem";

class ResultList extends Component {


    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
            <ResultListItem 
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            link={book.volumeInfo.previewLink}
            authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"}
            description={book.volumeInfo.description}
            saveGoogleBook={this.props.saveGoogleBook}
            />
        ))
        )
                           
    }
}

export default ResultList