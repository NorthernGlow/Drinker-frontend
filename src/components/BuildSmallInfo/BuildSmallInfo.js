import React from 'react';

import css from './BuildSmallInfo.module.css'
import {Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";

const BuildSmallInfo = ({build}) => {

    const {id, name, averageCheck, mainPhoto} = build;
    const navigate = useNavigate();
    const r = 2.9;

    function onClickBuild() {
        navigate(`/customer/drinks/${id}`)
    }

    return (
        <div className={css.box} onClick={onClickBuild}>
            <div>
                {mainPhoto ? <img className={css.image}
                                  src={`http://localhost:8080/buildPhoto/${mainPhoto}`} alt="rest"/> :
                    <img className={css.image}
                         src="https://bzh.life/wp-content/uploads/2022/11/316152468_114531001474609_4860082908267667783_n-1.jpg"
                         alt="rest"/>}
            </div>
            <div>
                {build && <h2 className={css.h2}>{name}</h2>}
                {build && <h3 className={css.h3}>Середній чек: {averageCheck} грн</h3>}
                <h3 className={css.h3}>Рейтинг: {r}</h3>
                <Rating name="half-rating" defaultValue={r} precision={0.5} size="large"/>
            </div>
        </div>
    );
};

export {BuildSmallInfo};