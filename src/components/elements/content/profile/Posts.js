import React from 'react'
import NewPost from "./NewPost";
import ListPosts from "./ListPosts";

const Posts = (props) => {
    let addNewPost = (values) =>{
        props.addPost(values.newPostField)
    }

    return(
        <>
            <NewPost
                onSubmit={addNewPost}
            />

            <ListPosts
                posts={props.posts}
            />
        </>
    )
}

export default Posts;