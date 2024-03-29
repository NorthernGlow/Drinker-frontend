import React, {useEffect, useState} from 'react';
import {Button, Container, Paper, TextField} from "@mui/material";

import css from './Authorization.module.css'
import {useNavigate} from "react-router-dom";

const AuthorizationCustomer = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [answer, setAnswer] = useState(0);

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        const customer = {login, password}
        fetch('http://localhost:8080/authorization', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(customer)

        }).then((res) => res.json())
            .then((result) => {
                setAnswer(result)
            })
        if (answer !== 0) {
            localStorage.setItem('customerId', JSON.stringify(answer))
            navigate('/customer/drinks')
        }
    }

    return (
        <div>
            <Container>
                <Paper elevation={3} className={css.paperStyle}>
                    <h1 className={css.header}>Authorization</h1>
                    <form className={css.Form} noValidate autoComplete="off">
                        <TextField className={css.Input} id="outlined-basic" label="Login" variant="outlined"
                                   type={"text"} fullWidth
                                   value={login}
                                   onChange={(e) => setLogin(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Password" variant="outlined"
                                   type={"password"} fullWidth
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button className={css.Button} variant="contained" onClick={handleClick}>
                            Ввійти
                        </Button>
                    </form>
                    {answer === 0 && <h4 className={css.Error}>Ви ввели невірно дані</h4>}
                </Paper>
            </Container>
        </div>
    );
};

export {AuthorizationCustomer};