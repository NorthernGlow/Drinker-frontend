import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import {ProjectPage, ProjectPageAfterSignIn} from "./containers";
import {AuthorizationPage, InfoAboutCustomer, RegistrationPage, MainPage, InfoAboutBuilding, SearchPage} from "./pages";
import {CreateBuildingPage, UpdateCustomerPage, AllMyBuildingPage, FavoriteBuildingPage} from "./pages";

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
                    <Route path={'drinks/:buildId'} element={<InfoAboutBuilding/>}/>
                    <Route path={'drinks/search'} element={<SearchPage/>}/>
                    <Route path={':customerId'} element={<InfoAboutCustomer/>}/>
                    <Route path={':customerId/addBuilding'} element={<CreateBuildingPage/>}/>
                    <Route path={':customerId/update'} element={<UpdateCustomerPage/>}/>
                    <Route path={':customerId/allBuilding'} element={<AllMyBuildingPage/>}/>
                    <Route path={':customerId/favoriteBuilding'} element={<FavoriteBuildingPage/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export {App};
