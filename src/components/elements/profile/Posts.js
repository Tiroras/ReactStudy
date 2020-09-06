import React from 'react'
import NewPost from "./NewPost";
import ListPosts from "./ListPosts";

export default function Posts(props) {
    return(
        <>
            <NewPost
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
                newPostText={props.newPostText}
            />

            <ListPosts
                posts={props.posts}
            />
        </>
    )
}