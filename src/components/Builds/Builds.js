import React from 'react';

import {useEffect, useState} from "react";
import {BuildSmallInfo} from "../index";

const Builds = () => {

    const [building, setBuilding] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/customer/drinks/all`)
            .then((res) => res.json())
            .then((result) => {
                setBuilding(result)
            })

    }, [])
    console.log(building);

    return (
        <div>
            {building.map(build=><BuildSmallInfo key={build.id} build={build}/>)}
        </div>
    );
};

export {Builds};