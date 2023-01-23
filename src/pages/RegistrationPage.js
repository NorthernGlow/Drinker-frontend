import React from 'react';
import {Registration} from "../components";

import css from "./Pages.module.css";

const RegistrationPage = () => {
    return (
        <div className={css.auto}>
            <div>
                <Registration/>
            </div>
        </div>
    );
};

export {RegistrationPage};