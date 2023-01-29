import React from 'react';

import css from './Header.module.css'
import {Buttons} from "../index";
import LocalBarIcon from '@mui/icons-material/LocalBar';

const Header = () => {
    return (
        <div className={css.Header}>
            <LocalBarIcon className={css.Icon}/>
            <Buttons/>
        </div>
    );
};

export {Header};