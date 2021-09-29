import React from "react";
import Faker from 'faker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'




function getRandomPostTime() {
    return (Math.floor(Math.random() * 10) + 1) + 'h';
}

function getRandomLikeBtn(like) {
    return like ? <FontAwesomeIcon icon={faHeart}/> : <FontAwesomeIcon style={{color:"red"}} icon={faHeart}/>
}


const Comment = (props) => {

    return (

                    <div className="Comment">
                        <div className="Comment-user-profile">
                            <img src={props.avatar} alt="User Comment Profile"/>
                        </div>
                        <div className="Comment-comment">
                            <div className="Comment-text">
                                <span className="Post-caption-username">{props.username}</span>
                                {props.comment}
                            </div>
                            <div className="Comment-detail">
                                <span>{props.time}</span>
                                <span>Reply</span>
                            </div>
                        </div>
                        <div className="Comment-like">
                             {getRandomLikeBtn(props['is-like'])}
                        </div>
                    </div>
    )
}

export default Comment;