import React from 'react';

import css from './Header.module.css'
import {Buttons} from "../index";

const Header = () => {
    return (
        <div className={css.Header}>
            <Buttons/>
        </div>
    );
};

export {Header};