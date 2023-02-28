import React from 'react';
import {UpdateCustomer} from "../components";
import css from "./Pages.module.css";

const UpdateCustomerPage = () => {
    return (
        <div className={css.Background}>
            <UpdateCustomer/>
        </div>
    );
};

export {UpdateCustomerPage};