import React, { useState, useRef } from "react";
import Slide from "@mui/material/Slide";
import { Checkbox } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import AddBookForm from "./AddBookForm";

const AddBook = (props) => {
    const [checked, setChecked] = useState(false);
    const containerRef = React.useRef(null);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div>
            <Checkbox
                icon={<ExpandMoreIcon />}
                checkedIcon={<ExpandLessIcon />}
                color="secondary"
                checked={checked}
                onChange={handleChange}
            />
            <Collapse
                in={checked}
                ref={containerRef}
                timeout={800}
                sx={{ overflow: "hidden" }}
            >
                <Slide
                    direction="down"
                    in={checked}
                    container={containerRef.current}
                    mountOnEnter={true}
                    unmountOnExit={true}
                    timeout={800}
                >
                    <Box>
                        <AddBookForm
                            onAddBook={props.onAddBook}
                            idList={props.idList}
                        />
                    </Box>
                </Slide>
            </Collapse>
        </div>
    );
};

export default AddBook;
