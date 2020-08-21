import React from 'react';
import Route from "react-router-dom/Route";
import Profile from "./elements/Profile";
import Dialogs from "./elements/Dialogs";
import News from "./elements/News";
import Music from "./elements/Music";
import Settings from "./elements/Settings";

export default function Content(props){
    return(
        <div className="content">



            <Route render={() => <Profile
                posts={props.data.profilePage.posts}
                newPostText={props.data.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPost={props.updateNewPost}
            />} path="/profile"/>



            <Route render={() => <Dialogs
                data={props.data.dialogsPage}
            />} path="/dialogs"/>



            <Route render={() => <News />} path="/news" />

            <Route render={() => <Music />} path="/music" />

            <Route render={() => <Settings />} path="/settings" />

        </div>
    )
}