import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Button, Container, Paper} from "@mui/material";

import css from "./Customer.module.css";



const Customer = () => {
    const [customer, setCustomer] = useState({});
    let {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/customer/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setCustomer(result)
            })

    }, [id])

    return (
        <div>
            <Container>
                <Paper elevation={6} className={css.paperStyle}>
                    <h1 className={css.header}>Information about profile</h1>
                    <div>
                        <img src={customer.photo} alt={"photo"} className={css.photo}/>
                    </div>
                    <div className={css.Info}>
                        <div className={css.line}>Ім'я: {customer.name}</div>
                        <div className={css.line}>Прізвище: {customer.surname}</div>
                        <div className={css.line}>Email: {customer.email}</div>
                    </div>
                    <Button variant="contained" className={css.button}>Змінити інформацію про користувача</Button>
                </Paper>
            </Container>
        </div>
    );
};

export {Customer};