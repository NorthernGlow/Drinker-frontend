import React, {useEffect, useState} from 'react';
import {BuildSmallInfo} from "../BuildSmallInfo/BuildSmallInfo";
import css from "./Search.module.css";

const Search = () => {
    const name = localStorage.getItem('name');
    const [builds, setBuilds] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/customer/drinks/searchBuild/${name}`)
            .then((res) => res.json())
            .then((result) => {
                setBuilds(result)
            })
    }, [])

    return (
        <div>
            {
                builds && <div>{builds.map(build => <BuildSmallInfo key={build.id} build={build}/>)}</div>
            }
            {
                !builds.length && <div className={css.NoBuild}>Такого закладу не існує</div>
            }
        </div>
    );
};

export {Search};