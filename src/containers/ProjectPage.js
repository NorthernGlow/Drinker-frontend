import React from 'react';
import {Outlet} from 'react-router-dom'

import {Header} from "../components";
import css from './ProjectPage.module.css'

const ProjectPage = () => {
    return (
        <div>
            <Header/>
            <div className={css.ProjectPage}>
                <Outlet/>
            </div>
        </div>
    );
};

export {ProjectPage};