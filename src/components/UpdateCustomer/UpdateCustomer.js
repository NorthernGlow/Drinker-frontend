import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Button, Container, Paper, TextField} from "@mui/material";

import css from "./UpdateCustomer.module.css";

const UpdateCustomer = () => {
    const [customer, setCustomer] = useState({});
    const {id} = useParams();
    const formData = new FormData();

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/customer/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setCustomer(result)
            })

    }, [id])

    function handleClick() {

        const newCustomer = {name, surname};
        console.log(newCustomer);
        fetch(`http://localhost:8080/customer/${id}/update`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCustomer)
        })
            .then(() => {
                console.log("Customer updated")
            })

        window.location.reload(false);
    }

    function SubmitFileDada() {
        fetch(`http://localhost:8080/customer/${id}`, {
            method: "PUT",
            body: formData
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

        window.location.reload(false);
    }

    function onFileChange(e) {
        if (e.target && e.target.files[0]) {
            formData.append('photo', e.target.files[0]);
        }
    }

    return (
        <div>
            <Container>
                <Paper elevation={3} className={css.paperStyle}>
                    <h1 className={css.header}>Registration</h1>
                    <img src={`http://localhost:8080/photo/${customer.photo}`} alt={"photo"}
                         className={css.photo}/>
                    <div className={css.block}>
                        <input id={"file-upload"} type={"file"} onChange={onFileChange}/>
                        <button className={css.custom_file_upload} onClick={SubmitFileDada}>Зберегти
                            зображення
                        </button>
                    </div>
                    <form className={css.Form} noValidate autoComplete="off">
                        <TextField className={css.Input} id="outlined-basic" label={customer.name} variant="outlined"
                                   type={"text"} fullWidth
                                   onChange={(e) => setName(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label={customer.surname} variant="outlined"
                                   type={"text"}
                                   fullWidth
                                   onChange={(e) => setSurname(e.target.value)}
                        />
                        <Button className={css.Button} variant="contained" onClick={handleClick}>
                            Змінити дані
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export {UpdateCustomer};