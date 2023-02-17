import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import css from "./Building.module.css"
import {Rating} from "@mui/material";

const Building = () => {
    const [building, setBuilding] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/customer/drinks/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setBuilding(result)
            })

    }, [id])
    console.log(building);
    const build = building[0];
    const location = building[1];
    const specifics = building[2];
    const teg = building[3];
    const r = 2.9;
    return (
        <div className={css.Box}>
            <div>
                <img className={css.image}
                     src="https://bzh.life/wp-content/uploads/2022/11/316152468_114531001474609_4860082908267667783_n-1.jpg"
                     alt="rest"/>
            </div>
            <div className={css.Box_in}>
                <div>
                    {build && <h1 className={css.h1}>{build.name}</h1>}
                    {teg && <h3>#{teg.forFamily.name}</h3>}
                </div>
                <div>
                    <h2 className={css.h2}>Графік роботи:</h2>
                    {location && <h2 className={css.h2}>Розташування: м. {location.city}, {location.region} обл., вул. {location.street} {location.buildingNumber}</h2>}
                    {build && <h2 className={css.h2}>Середній чек: {build.averageCheck} грн</h2>}
                    {specifics && <h2 className={css.h2}>Особливості:</h2>}
                    <h2 className={css.h2}>Рейтинг: {r}</h2>
                    <Rating name="half-rating" defaultValue={r} precision={0.5} size="large"/>
                </div>
            </div>
        </div>
    );
};

export {Building};