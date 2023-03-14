import React, {useEffect, useState} from 'react';
import {
    alpha,
    Avatar, Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputBase,
    styled
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import {useNavigate} from "react-router-dom";

import css from './Header.module.css'


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '400px',
            '&:focus': {
                width: '450px',
            },
        },
    },
}));

function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const Header2 = () => {
    let navigate = useNavigate();
    const [customer, setCustomer] = useState({});
    const [open, setOpen] = useState(false);

    const customerId = localStorage.getItem('customerId');

    useEffect(() => {
        fetch(`http://localhost:8080/customer/${customerId}`)
            .then((res) => res.json())
            .then((result) => {
                setCustomer(result)
            })

    }, [customerId])


    function onClickAvatar() {
        navigate(`/customer/${customerId}`)
    }

    function onClickIcon() {
        navigate(`/customer/drinks`)
    }

    function Exit() {
        setOpen(false)
        localStorage.clear();
        navigate(`/authorization`)
    }

    function handleClose() {
        setOpen(false)
    }

    function ModalIconExit() {
        setOpen(true)
    }

    return (
        <div className={css.Header}>
            <LocalBarIcon className={css.Icon} onClick={onClickIcon}/>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                />
            </Search>
            <div className={css.avatar}>
                <Avatar {...stringAvatar(`${customer.name} ${customer.surname}`)} onClick={onClickAvatar}/>
                <button className={css.btn} onClick={ModalIconExit}>Вийти</button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Вихід`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Ви дійсно хочете вийти?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        НІ
                    </Button>
                    <Button onClick={Exit} color="primary" autoFocus>
                        ТАК
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export {Header2};