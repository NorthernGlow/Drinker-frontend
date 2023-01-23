import React from 'react';
import {useNavigate} from "react-router-dom"

import css from './Buttons.module.css'

const Buttons = () => {
    const navigate = useNavigate();

    const onClickAutorization = ()=>{
        navigate('/autorization')
    }

    const onClickRegistration = () => {
      navigate('/registration')
    }
    return (
        <div className={css.Buttons}>
            <div className={css.Button} onClick={onClickAutorization}>Вхід</div> /
            <div className={css.Button} onClick={onClickRegistration}>Реєстрація</div>
        </div>
    );
};

export {Buttons};