import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Container, Paper} from "@mui/material";

import css from "./Customer.module.css";



const Customer = () => {
    const [customer, setCustomer] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/customer/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setCustomer(result)
            })

    }, [id])
    
    console.log(customer);

    function AddNewBuilding(){
        navigate(`/customer/${id}/addBuilding`)
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
                    <button variant="contained" className={css.button} onClick={ChangeInformation}>Змінити інформацію про користувача</button>
                    <div className={css.buttons}>
                        <button variant="contained" className={css.button} onClick={AllMyBuilding}>Мої заклади</button>
                        <button variant="contained" className={css.button} onClick={AddNewBuilding}>Додати новий заклад</button>
                        <button variant="contained" className={css.button} onClick={FavoriteBuilding}>Вподобані заклади</button>
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export {Customer};