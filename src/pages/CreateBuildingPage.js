import React from 'react';

import {CreateBuilding} from "../components";
import css from "./Pages.module.css"

const CreateBuildingPage = () => {
    return (
        <div className={css.Background}>
            <CreateBuilding/>
        </div>
    );
};

export {CreateBuildingPage};