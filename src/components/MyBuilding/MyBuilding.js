import React from 'react';

import css from './MyBuilding.module.css'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {BuildSmallInfo} from "../BuildSmallInfo/BuildSmallInfo";

const MyBuilding = () => {

    const [building, setBuilding] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/customer/${id}/allBuilding`)
            .then((res) => res.json())
            .then((result) => {
                setBuilding(result)
            })

    }, [])
    return (
        <div>
            {building && <div>{building.map(build => <BuildSmallInfo key={build.id} build={build}/>)}</div> }
            {!building.length && <div className={css.NoBuild}>У вас немає ваших власних закладів </div>}


        </div>
    );
};

export {MyBuilding};