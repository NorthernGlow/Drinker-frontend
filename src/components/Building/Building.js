import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import css from "./Building.module.css"
import {Button, Rating, TextField} from "@mui/material";
import {Comment} from "../Comment/Comment";

const Building = () => {
    const [building, setBuilding] = useState({});
    const [customer, setCustomer] = useState({});

    const [value, setValue] = useState(0.0);
    const [rating, setRating] = useState(0.0);

    const [comments, setComments] = useState([]);
    const [body, setBody] = useState("");

    const {buildId} = useParams();

    const [com, setCom] = useState(false);

    const customerId = localStorage.getItem('customerId');

    useEffect(() => {
        fetch(`http://localhost:8080/customer/${customerId}`)
            .then((res) => res.json())
            .then((result) => {
                setCustomer(result)
                console.log(customer);
            })

    }, [customerId])

    useEffect(() => {
        fetch(`http://localhost:8080/customer/drinks/${buildId}`)
            .then((res) => res.json())
            .then((result) => {
                setBuilding(result)
            })

    }, [buildId])

    function onChangeRating(e, newValue) {
        setValue(newValue)

        fetch(`http://localhost:8080/customer/drinks/${buildId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: value
        })
            .then((res) => res.json())
            .then((result) => {
                setRating(result)
            })
    }

    function reservation() {

    }

    function handleClickComment(e) {
        e.preventDefault()
        const buildingId = buildId;
        const comment = {body, buildingId, customerId};
        fetch('http://localhost:8080/saveComment', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(comment)

        }).then(() => {
            console.log("New Comment added")
        })

        window.location.reload(false);
    }

    function showComments() {
        setCom(true);
        fetch(`http://localhost:8080/allComments/${buildId}`)
            .then((res) => res.json())
            .then((result) => {
                setComments(result)
            })
    }

    // console.log(building.specifics.wifi);
    return (
        <div>
            <div className={css.Box}>
                <div>
                    {building && <img className={css.image}
                                         src={`http://localhost:8080/buildPhoto/${building.mainPhoto}`} alt="rest"/>}
                </div>
                <div className={css.Box_in}>
                    <div>
                        {building && <h1 className={css.h1}>{building.name}</h1>}
                        {/*{teg && <h3>#{teg.forFamily.name}</h3>}*/}
                    </div>
                    <div>
                        {building && <h2 className={css.h2}>Графік роботи: {building.schedule}</h2>}
                        {building.location && <h2 className={css.h2}>Розташування: м. {building.location.city}, {building.location.region} обл., вул. {building.location.street} {building.location.buildingNumber}</h2>}
                        {building && <h2 className={css.h2}>Середній чек: {building.averageCheck} грн</h2>}
                        {building && <h2 className={css.h2}>Тел: {building.phone}</h2>}
                        {/*{building && <h2 className={css.h2}>Особливості:</h2>}*/}
                        {/*    /!*{building.specifics.wifi === true && <b>WI-FI </b>}*!/*/}
                        {/*    /!*{building.specifics.parking === true && <b> парковка </b>}*!/*/}
                        {/*    /!*{building.specifics.withAnimal === true && <b> з тваринами </b>}*!/*/}
                        {/*    /!*{building.specifics.liveMusic === true && <b>жива музика</b>}*/}

                        {/*{building && <div><h2 className={css.h2}>Рейтинг: {building.rating}</h2>*/}
                        {/*    <Rating name="simple-controlled" value={building.rating} precision={0.5} size="large"*/}
                        {/*            onChange={onChangeRating}/>*/}
                        {/*    <div>{value}</div>*/}
                        {/*</div>}*/}
                        {/*<Button className={css.btn} variant="contained" onClick={reservation}>*/}
                        {/*    Зарезервувати столик*/}
                        {/*</Button>*/}
                    </div>
                </div>
            </div>
            <div className={css.Box_Com}>
                <div className={css.BoxForComment}>
                    <img className={css.img}
                         src={`http://localhost:8080/photo/${customer.photo}`}
                         alt="photo"/>
                    <div>
                        <h3 className={css.h2}>{customer.name} {customer.surname}</h3>
                        <TextField id="standard-multiline-static"
                                   label="Коментар"
                                   multiline
                                   rows={4}
                                   className={css.newComment}
                                   onChange={(e) => setBody(e.target.value)}
                        />
                        <Button className={css.btnCom} variant="contained" onClick={handleClickComment}>
                            Залишити коментар
                        </Button>
                    </div>
                </div>
                <Button className={css.btnCom} variant="contained" onClick={showComments}>
                    Переглянути усі коментарі
                </Button>
                {com && <div>
                    {
                        comments.map((comment)=><Comment key={comment.id} comment={comment}/>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export {Building};