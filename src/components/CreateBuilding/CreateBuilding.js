import React, {useState} from 'react';

import {Button, Container, Paper, TextField} from "@mui/material";
import css from "../Registration/Registration.module.css";
import {useNavigate, useParams} from "react-router-dom";

const CreateBuilding = () => {
    const [name, setName] = useState('');
    const [averageCheck, setAverageCheck] = useState('');

    const {id} = useParams();
    const navigate = useNavigate();

    const customerId = id;
    function handleClick() {
        const building = {customerId, name, averageCheck}
        fetch(`http://localhost:8080/customer/${id}/building`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(building)

        }).then(() => {
            console.log("New Building added")
        })

        navigate(`customer/${id}/building/location`)
    }

    return (
        <div>
            <Container>
                <Paper elevation={3} className={css.paperStyle}>
                    <h1 className={css.header}>Registration</h1>
                    <form className={css.Form} noValidate autoComplete="off">
                        <TextField className={css.Input} id="outlined-basic" label="Name" variant="outlined" type={"text"} fullWidth
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Avarege check" variant="outlined" type={"text"}
                                   fullWidth
                                   value={averageCheck}
                                   onChange={(e) => setAverageCheck(e.target.value)}
                        />
                        <Button className={css.Button} variant="contained" onClick={handleClick}>
                            Далі
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export {CreateBuilding};