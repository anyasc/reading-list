import React from "react";

import Book from "./Book";

const Booklist = (props) => {
    return (
        <div>
            {props.books.map((book) => (
                <Book
                    key={book.id}
                    book={book}
                    deleteBook={props.deleteBook}
                />
            ))}
        </div>
    );
};

export default Booklist;
