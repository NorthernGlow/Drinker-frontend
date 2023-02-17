import React from 'react';

import {Building} from "../components";
import css from './Pages.module.css'

const InfoAboutBuilding = () => {
    return (
        <div className={css.Background}>
            <div>
                <Building/>
            </div>
        </div>
    );
};

export {InfoAboutBuilding};