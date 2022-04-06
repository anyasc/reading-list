import React, { useState } from "react";
import { Container, Typography } from "@mui/material";

import "./App.css";

import AddBook from "./add-book/AddBook";
import Booklist from "./book-list/BookList";

function App() {
    const [books, setBooks] = useState([
        { name: "Eragon", author: "Cristopher Paolini", status: 'read', rating: 2, id:"EragonCristopher Paolini"},
    ]);

    const [idList, setIdList] = useState(["dummybook"]);

    const addBookHandler = (book) => {
        setBooks((prevState) => [book, ...prevState]);
        setIdList(prevIDs => [book.id, ...prevIDs]);
        console.log(idList)
    };

    const deleteBook = id => {
        setBooks((prevState) => prevState.filter(book => book.id !== id))
    }

    return (
            <Container>
                <Typography variant="h3" component="div" gutterBottom>Reading List</Typography>
                <AddBook onAddBook={addBookHandler} idList={idList} />

                <Booklist books={books} deleteBook={deleteBook} />
            </Container>
    );
}

export default App;
