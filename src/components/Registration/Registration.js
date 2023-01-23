import React, {useEffect, useState} from 'react';
import {Button, Container, Paper, TextField} from "@mui/material";

import css from "./Registration.module.css"


const Registration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault()
        const customer = {name, surname, email, login, password}
        fetch('http://localhost:8080/registration', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(customer)

        }).then(() => {
            console.log("New Customer added")
        })

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
                        <TextField className={css.Input} id="outlined-basic" label="Surname" variant="outlined" type={"text"}
                                   fullWidth
                                   value={surname}
                                   onChange={(e) => setSurname(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Email" variant="outlined" type={"text"} fullWidth
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Login" variant="outlined" type={"text"} fullWidth
                                   value={login}
                                   onChange={(e) => setLogin(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Password" variant="outlined" type={"password"} fullWidth
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button className={css.Button} variant="contained" onClick={handleClick}>
                            Зареєструватися
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export {Registration};