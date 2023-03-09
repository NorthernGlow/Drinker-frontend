import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import css from "./Building.module.css"
import {Button, Rating, TextField} from "@mui/material";
import {Comment} from "../Comment/Comment";

const Building = () => {
    const [building, setBuilding] = useState([]);

    const [value, setValue] = useState(0.0);
    const [rating, setRating] = useState(0.0);

    const [comments, setComments] = useState([]);
    const [body, setBody] = useState("");

    const {id} = useParams();

    const [com, setCom] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8080/customer/drinks/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setBuilding(result)
            })

    }, [id])

    function onChangeRating(e, newValue) {
        setValue(newValue)

        fetch(`http://localhost:8080/customer/drinks/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: value
        })
            .then((res) => res.json())
            .then((result) => {
                setRating(result)
            })
    }

    function handleClick() {

    }

    function handleClickComment(e) {
        e.preventDefault()
        const buildingId = id;
        const comment = {body, buildingId};
        fetch('http://localhost:8080/saveComment', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(comment)

        }).then(() => {
            console.log("New Comment added")
        })
    }

    function showComments() {
        setCom(true);
        fetch(`http://localhost:8080/allComments/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setComments(result)
            })
    }

    return (
        <div>
            <div className={css.Box}>
                <div>
                    {building[0] && <img className={css.image}
                                         src={`http://localhost:8080/buildPhoto/${building[0].mainPhoto}`} alt="rest"/>}
                </div>
                <div className={css.Box_in}>
                    <div>
                        {building[0] && <h1 className={css.h1}>{building[0].name}</h1>}
                        {/*{teg && <h3>#{teg.forFamily.name}</h3>}*/}
                    </div>
                    <div>
                        {building[0] && <h2 className={css.h2}>Графік роботи: {building[0].schedule}</h2>}
                        {/*{location && <h2 className={css.h2}>Розташування: м. {location.city}, {location.region} обл., вул. {location.street} {location.buildingNumber}</h2>}*/}
                        {building[0] && <h2 className={css.h2}>Середній чек: {building[0].averageCheck} грн</h2>}
                        {building[0] && <h2 className={css.h2}>Тел: {building[0].phone}</h2>}
                        {/*{specifics && <h2 className={css.h2}>Особливості:</h2>}*/}
                        {building[0] && <div><h2 className={css.h2}>Рейтинг: {building[0].rating}</h2>
                            <Rating name="simple-controlled" value={building[0].rating} precision={0.5} size="large"
                                    onChange={onChangeRating}/>
                            <div>{value}</div>
                        </div>}
                        <Button className={css.btn} variant="contained" onClick={handleClick}>
                            Зарезервувати столик
                        </Button>
                    </div>
                </div>
            </div>
            <div className={css.Box_Com}>
                <div className={css.BoxForComment}>
                    <img className={css.img}
                         src="https://images.pexels.com/photos/2328141/pexels-photo-2328141.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2328141.jpg&fm=jpg"
                         alt="photo"/>
                    <div>
                        <h3 className={css.h2}>Name</h3>
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