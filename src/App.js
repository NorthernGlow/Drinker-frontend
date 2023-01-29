import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import {ProjectPage, ProjectPageAfterSignIn} from "./containers";
import {AuthorizationPage, InfoAboutCustomer, RegistrationPage, MainPage} from "./pages";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={''} element={<ProjectPage/>}>
                    <Route index element={<Navigate to={'authorization'}/>}/>
                    <Route path={'authorization'} element={<AuthorizationPage/>}/>
                    <Route path={'registration'} element={<RegistrationPage/>}/>
                </Route>
                <Route path={'customer'} element={<ProjectPageAfterSignIn/>}>
                    <Route index element={<Navigate to={'drinks'}/>}/>
                    <Route path={'drinks'} element={<MainPage/>}/>
                    <Route path={':id'} element={<InfoAboutCustomer/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
