import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Container, Paper} from "@mui/material";

import css from "./Customer.module.css";
import {useForm} from "react-hook-form";


const Customer = () => {
    const [customer, setCustomer] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();
    const formData = new FormData();

    useEffect(() => {
        fetch(`http://localhost:8080/customer/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setCustomer(result)
            })

    }, [id])

    function AddNewBuilding() {
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
                <Paper elevation={6} className={css.paperStyle}>
                    <h1 className={css.header}>Information about profile</h1>
                    {customer.photo ? <div><img src={`http://localhost:8080/photo/${customer.photo}`} alt={"photo"}
                                                className={css.photo}/></div> :
                        <div>{
                            <div>
                                <h2>Додати фотографію</h2>
                                <div className={css.block}>
                                    <input id={"file-upload"} type={"file"} onChange={onFileChange}/>
                                    <button className={css.custom_file_upload} onClick={SubmitFileDada}>Зберегти
                                        зображення
                                    </button>
                                </div>
                            </div>

                        }
                        </div>
                    }
                    <div className={css.Info}>
                        <div className={css.line}>Ім'я: {customer.name}</div>
                        <div className={css.line}>Прізвище: {customer.surname}</div>
                        <div className={css.line}>Email: {customer.email}</div>
                    </div>
                    <button variant="contained" className={css.button} onClick={ChangeInformation}>Змінити
                        інформацію
                        про користувача
                    </button>
                    <div className={css.buttons}>
                        <button variant="contained" className={css.button} onClick={AllMyBuilding}>Мої заклади
                        </button>
                        <button variant="contained" className={css.button} onClick={AddNewBuilding}>Додати новий
                            заклад
                        </button>
                        <button variant="contained" className={css.button} onClick={FavoriteBuilding}>Вподобані
                            заклади
                        </button>
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export {Customer};
