import React, { Component } from 'react';
import SavedListItem from "../SavedListItem/SavedListItem";

class SavedList extends Component {


    render() {
       
        return (
            this.props.bookState.map((book) => (
            <SavedListItem 
            key={book._id}
            id={book._id}
            title={book.title}
            link={book.link}
            authors={book.authors && book.authors.length > 1 ? book.authors.join(", ") : book.authors}
            image={book.image ? book.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"}
            description={book.description}
            deleteGoogleBook={this.props.deleteGoogleBook}
            />
        ))
        )
                           
    }
}

export default SavedList