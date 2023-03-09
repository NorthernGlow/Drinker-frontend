import React, {useState} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import {ProjectPage, ProjectPageAfterSignIn} from "./containers";
import {AuthorizationPage, InfoAboutCustomer, RegistrationPage, MainPage, InfoAboutBuilding} from "./pages";
import {CreateBuildingPage, UpdateCustomerPage, AllMyBuildingPage, FavoriteBuildingPage} from "./pages";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import css from "./App.module.css"

const App = () => {

    const [open, setOpen] = useState(true);
    const [age, setAge] = useState(false);

    function handleCloseNo() {
        setOpen(false);
    }

    function handleCloseYes() {
        setOpen(false);
        setAge(true);
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleCloseNo}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Натиснувши клавішу "Так" ви підтверджуєте, що вам більше 18 років`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <p className={css.p}>УВАГА!</p> Надмірне споживання алкоголю шкідливе для вашого здоров'я!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseNo} color="primary">
                        НІ
                    </Button>
                    <Button onClick={handleCloseYes} color="primary" autoFocus>
                        ТАК
                    </Button>
                </DialogActions>
            </Dialog>
            {age ? <Routes>
                <Route path={''} element={<ProjectPage/>}>
                    <Route index element={<Navigate to={'authorization'}/>}/>
                    <Route path={'authorization'} element={<AuthorizationPage/>}/>
                    <Route path={'registration'} element={<RegistrationPage/>}/>
                </Route>
                <Route path={'customer'} element={<ProjectPageAfterSignIn/>}>
                    <Route index element={<Navigate to={'drinks'}/>}/>
                    <Route path={'drinks'} element={<MainPage/>}/>
                    <Route path={'drinks/:id'} element={<InfoAboutBuilding/>}/>
                    <Route path={':id'} element={<InfoAboutCustomer/>}/>
                    <Route path={':id/addBuilding'} element={<CreateBuildingPage/>}/>
                    <Route path={':id/update'} element={<UpdateCustomerPage/>}/>
                    <Route path={':id/allBuilding'} element={<AllMyBuildingPage/>}/>
                    <Route path={':id/favoriteBuilding'} element={<FavoriteBuildingPage/>}/>

                </Route>
            </Routes> :
                <div className={css.text}>Вам немає 18 років, тому ви не можете відвідати даний сайт!</div>
            }
        </div>
    );
};

export {App};
