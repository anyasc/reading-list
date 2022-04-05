import {
    Button,
    Card,
    CardHeader,
    CardContent,
    Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DoneIcon from "@mui/icons-material/Done";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

const Book = (props) => {
    const deleteBookHandler = () => props.deleteBook(props.book.id);

    const editHandler = () => {};

    const statusIcon =
        props.book.status === "read" ? (
            <DoneIcon />
        ) : props.book.status === "reading" ? (
            <AutoStoriesIcon />
        ) : (
            <HourglassTopIcon />
        );

    const labels = {
        0.5: "Unbearable",
        1: "Awful",
        1.5: "Really Bad",
        2: "Bad",
        2.5: "Ok",
        3: "Goodish",
        3.5: "Good",
        4: "Very Good",
        4.5: "Excellent",
        5: "Perfect",
    };
    return (
        <div>
            <IconButton
                color="error"
                aria-label="delete"
                onClick={deleteBookHandler}
            >
                <DeleteIcon />
            </IconButton>
            <IconButton
                color="success"
                aria-label="delete"
                onClick={editHandler}
            >
                <EditIcon />
            </IconButton>
            <Card>
                <CardHeader></CardHeader>
                <CardContent>
                    <Typography>{props.book.name}</Typography>
                    <Typography>Author: {props.book.author}</Typography>
                    <Typography>Status: </Typography>
                    {statusIcon}

                    {props.book.status === "read" && (
                        <div>
                            <Typography component="legend">Rating</Typography>
                            <Box
                                sx={{
                                    width: 200,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Rating
                                    name="read-only"
                                    value={props.book.rating}
                                    readOnly
                                />
                                <Box sx={{ ml: 2 }}>
                                    {labels[props.book.rating]}
                                </Box>
                            </Box>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default Book;
