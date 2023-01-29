import React from 'react';
import {Outlet} from 'react-router-dom'

import {Header2} from "../components";
import css from './ProjectPage.module.css'

const ProjectPageAfterSignIn = () => {
    return (
        <div>
            <Header2/>
            <div className={css.ProjectPage}>
                <Outlet/>
            </div>
        </div>
    );
};

export {ProjectPageAfterSignIn};