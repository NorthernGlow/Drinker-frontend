import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import css from "./Comment.module.css"

const Comment = ({comment}) => {
    const {customerId, customerFirstName, customerLastName, body, likes, dislikes} = comment;
    return (
        <div>
            <div className={css.BoxForComment}>
                <img className={css.img}
                     src="https://images.pexels.com/photos/2328141/pexels-photo-2328141.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2328141.jpg&fm=jpg"
                     alt="photo"/>
                <div>
                    <h3 className={css.h2}>{`${customerFirstName} ${customerLastName}`}</h3>
                    <div className={css.newComment}>{body}</div>
                </div>
                <div>
                    <ThumbUpIcon/> {likes}
                    <ThumbDownIcon/> {dislikes}
                </div>
            </div>
        </div>
    );
};

export {Comment};