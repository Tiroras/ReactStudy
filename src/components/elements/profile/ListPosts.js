import React from 'react';
import Post from "./Post";
import StoreContext from "../../../store-context";

export default function ListPosts(props) {
    return(
        <StoreContext.Consumer>
            {(store)=> {
                let state = store.getState().profileData.posts
                return (
                    <div className="list-posts">
                        {state.map((post) => (
                            <Post
                                key={post.id}
                                id={post.id}
                                text={post.text}
                                attachment={post.attachment}
                                likesCount={post.likesCount}/>
                        ))}
                    </div>)
            }}
        </StoreContext.Consumer>
    )

}