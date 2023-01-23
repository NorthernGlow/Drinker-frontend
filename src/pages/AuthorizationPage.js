import React from 'react';
import {AuthorizationCustomer} from "../components";
import css from './Pages.module.css'

const AuthorizationPage = () => {
    return (
        <div className={css.auto}>
            <div>
                <AuthorizationCustomer/>
            </div>
        </div>
    );
};

export {AuthorizationPage};