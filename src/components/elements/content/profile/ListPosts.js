import React from 'react';
import Post from "./Post";

export default function ListPosts(props) {
    return(
        <div className="list-posts">
            {props.posts.map((post)=>(
                <Post
                    key={post.id}
                    id={post.id}
                    text={post.text}
                    attachment={post.attachment}
                    likesCount={post.likesCount} />
            ))}
        </div>
    )

}