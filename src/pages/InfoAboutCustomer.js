import React from 'react';

import {Customer} from "../components";
import css from './Pages.module.css'

const InfoAboutCustomer = () => {
    return (
        <div className={css.Background}>
            <div>
                <Customer/>
            </div>
        </div>
    );
};

export {InfoAboutCustomer};