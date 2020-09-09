import React from 'react';
import Route from "react-router-dom/Route";
import News from "./elements/content/news/News";
import Music from "./elements/content/mucis/Music";
import Settings from "./elements/content/settings/Settings";
import DialogsContainer from "./elements/content/dialogs/DialogsContainer";
import UsersContainer from "./elements/content/users/UsersContainer";
import ProfileContainer from "./elements/content/profile/ProfileContainer";
import Login from "./elements/content/login/Login";

export default function Content(props){
    return(
        <div className="content">



            <Route render={() => <ProfileContainer />} path="/profile/:userId?"/>



            <Route render={() => <DialogsContainer />} path="/dialogs"/>



            <Route render={() => <News />} path="/news" />

            <Route render={() => <Music />} path="/music" />

            <Route render={() => <Settings />} path="/settings" />

            <Route render={() => <UsersContainer />} path="/search" />

            <Route render={() => <Login />} path="/login" />

        </div>
    )
}