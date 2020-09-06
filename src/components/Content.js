import React from 'react';
import Route from "react-router-dom/Route";
import News from "./elements/News";
import Music from "./elements/Music";
import Settings from "./elements/Settings";
import DialogsContainer from "./elements/DialogsContainer";
import UsersContainer from "./elements/UsersContainer";
import ProfileContainer from "./elements/ProfileContainer";

export default function Content(props){
    return(
        <div className="content">



            <Route render={() => <ProfileContainer />} path="/profile/:userId?"/>



            <Route render={() => <DialogsContainer />} path="/dialogs"/>



            <Route render={() => <News />} path="/news" />

            <Route render={() => <Music />} path="/music" />

            <Route render={() => <Settings />} path="/settings" />

            <Route render={() => <UsersContainer />} path="/search" />

        </div>
    )
}