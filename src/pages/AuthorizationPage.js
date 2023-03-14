import React, {useState} from 'react';

import {AuthorizationCustomer} from "../components";
import css from './Pages.module.css'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const AuthorizationPage = () => {
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
        <div className={css.auto}>
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
            {age ? <div>
                <AuthorizationCustomer/>
            </div> :
                <div className={css.text}>Вам немає 18 років, тому ви не можете відвідати даний сайт!</div>
            }
        </div>
    );
};

export {AuthorizationPage};