import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button, Container, Paper} from "@mui/material";

import css from "./Customer.module.css";



const Customer = () => {
    const [customer, setCustomer] = useState({});
    const navigate = useNavigate();

    let {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/customer/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setCustomer(result)
            })

    }, [id])

    function AddNewBuilding(){
        navigate(`/customer/${id}/building`)
    }

    function ChangeInformation() {
        navigate(`/customer/${id}/update`)
    }

    function AllMyBuilding() {
        navigate(`/customer/${id}/allBuilding`)
    }

    function FavoriteBuilding() {
        navigate(`/customer/${id}/favoriteBuilding`)
    }

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
                    <Button variant="contained" className={css.button} onClick={ChangeInformation}>Змінити інформацію про користувача</Button>
                    <div className={css.buttons}>
                        <Button variant="contained" className={css.button} onClick={AllMyBuilding}>Мої заклади</Button>
                        <Button variant="contained" className={css.button} onClick={AddNewBuilding}>Додати новий заклад</Button>
                        <Button variant="contained" className={css.button} onClick={FavoriteBuilding}>Вподобані заклади</Button>
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export {Customer};