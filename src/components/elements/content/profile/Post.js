import React from 'react';

export default function Post(props){
    return (
        <>
            <div className="post" id={props.id}>
                <div className="avatar">
                    <img />
                </div>

                <div className="post-text">
                    {props.text}
                </div>

                <div className="post-attachment">
                    {props.attachment}
                </div>

                <div className="like">
                    <button>Like</button>
                </div>

                <div className="count">
                    {props.likesCount}
                </div>
            </div>
        </>
    )
}