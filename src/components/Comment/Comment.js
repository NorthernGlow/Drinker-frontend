import React, {useState,useEffect} from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import css from "./Comment.module.css"

const Comment = ({comment}) => {
    const {customerId, body, likes, dislikes, id} = comment;

    const [likeLight, setLikeLight] = useState(false);
    const [dislikeLight, setDislikeLight] = useState(false);

    const [customer, setCustomer] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/customer/${customerId}`)
            .then((res) => res.json())
            .then((result) => {
                setCustomer(result)
            })

    }, [customerId])

    function addLike() {
        setLikeLight(true)
        fetch(`http://localhost:8080/comment/${id}/like`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: likes+1
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

        // window.location.reload(false);
    }


    function addDislike() {
        setDislikeLight(true)
        fetch(`http://localhost:8080/comment/${id}/dislike`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: dislikes+1
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <div className={css.comment}>
            <div className={css.BoxForComment}>
                {customer ? <img className={css.img}
                      src={`http://localhost:8080/photo/${customer.photo}`}
                      alt="photo"/> :
                    <img className={css.img}
                         src="https://www.meme-arsenal.com/memes/35d872f93f0ce698a105d40e92536815.jpg"
                         alt="photo"/>
                }
                <div className={css.text}>
                    <h3 className={css.h2}>{customer.name} {customer.surname}</h3>
                    <div className={css.newComment}>{body}</div>
                </div>
                <div className={css.likeOrDis_Box}>
                    <div className={css.likeOrDis} onClick={addLike}><ThumbUpIcon
                        style={{"color": likeLight && "blue"}}/> {likes}</div>
                    <div className={css.likeOrDis} onClick={addDislike}><ThumbDownIcon
                        style={{"color": dislikeLight && "blue"}}/> {dislikes}</div>
                </div>
            </div>
        </div>
    );
};

export {Comment};