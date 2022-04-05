import React, { useState, useEffect, useRef } from "react";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DoneIcon from "@mui/icons-material/Done";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

const AddBookForm = (props) => {
    const [formName, setFormName] = useState("");
    const [formAuthor, setFormAuthor] = useState("");
    const [formStatus, setFormStatus] = useState("");
    const [formRating, setFormRating] = useState("");


    const nameField = useRef(null);
    const [bookRead, setBookRead] = useState(false);

    const nameChangeHandler = (event) => {
        setFormName(event.target.value);
    };
    const authorChangeHandler = (event) => {
        setFormAuthor(event.target.value);
    };
    const handleRadioChange = (event) => {
        if (event.target.value === "read") {
            setBookRead(true);
        } else {
            setBookRead(false);
        }
        setFormStatus(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (formName.trim() === "" || formAuthor.trim() === "") {
            alert("Please input book name and author.");
            return;
        }

        if (props.idList.includes(`${formName} ${formAuthor}`)) {
            alert("Book already on the list!");
            return;
        }

        const newBook = {
            name: formName,
            author: formAuthor,
            status: formStatus,
            rating: formRating,
            id: `${formName} ${formAuthor}`,
        };
        props.onAddBook(newBook);
        setFormName("");
        setFormAuthor("");
        nameField.current.focus();
    };



    // Rating
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
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
        <Card variant="outlined">
            <Box
                component="form"
                action="submit"
                onSubmit={submitHandler}
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
            >
                <Grid container spacing={.3}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                            variant="outlined"
                            label="Book Name"
                            type="text"
                            name="book-name"
                            id="book-name-form"
                            autoComplete="off"
                            onChange={nameChangeHandler}
                            value={formName}
                            ref={nameField}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField
                            variant="outlined"
                            label="Book Author"
                            type="text"
                            name="book-author"
                            id="book-author-form"
                            autoComplete="off"
                            onChange={authorChangeHandler}
                            value={formAuthor}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <RadioGroup
                            row
                            name="read"
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel
                                value="wishlist"
                                control={
                                    <Radio
                                        icon={<HourglassTopIcon />}
                                        checkedIcon={<HourglassTopIcon />}
                                        color="warning"
                                    />
                                }
                                label="Wishlist"
                                labelPlacement="bottom"
                                sx={{fontSize: '14px'}}
                            />
                            <FormControlLabel
                                value="reading"
                                control={
                                    <Radio
                                        icon={<AutoStoriesIcon />}
                                        checkedIcon={<AutoStoriesIcon />}
                                        color="info"
                                    />
                                }
                                label="Reading"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="read"
                                control={
                                    <Radio
                                        icon={<DoneIcon />}
                                        checkedIcon={<DoneIcon />}
                                        color="success"
                                    />
                                }
                                label="Read"
                                labelPlacement="bottom"
                            />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box
                            sx={{
                                width: 200,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Rating
                                disabled={!bookRead}
                                name="book-rating"
                                value={value}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                    setFormRating(newValue)
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={
                                    <StarIcon
                                        style={{ opacity: 0.55 }}
                                        fontSize="inherit"
                                    />
                                }
                            />
                            {bookRead ? (
                                <Box sx={{ ml: 2 }}>
                                    {labels[hover !== -1 ? hover : value]}
                                </Box>
                            ) : (
                                <Box sx={{ ml: 2 }}>Not finished</Box>
                            )}
                        </Box>
                    </Grid>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" size="small" type="submit">
                            Add
                        </Button>
                    </Stack>
                </Grid>
            </Box>
        </Card>
    );
};

export default AddBookForm;
