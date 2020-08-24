import React from 'react';
import Route from "react-router-dom/Route";
import Profile from "./elements/Profile";
import Dialogs from "./elements/Dialogs";
import News from "./elements/News";
import Music from "./elements/Music";
import Settings from "./elements/Settings";
import DialogsContainer from "./elements/DialogsContainer";

export default function Content(props){
    return(
        <div className="content">



            <Route render={() => <Profile
                // data={props.profileData}
                // dispatch={props.dispatch}
            />} path="/profile"/>



            <Route render={() => <DialogsContainer
                // data={props.dialogsData}
                // dispatch={props.dispatch}
            />} path="/dialogs"/>



            <Route render={() => <News />} path="/news" />

            <Route render={() => <Music />} path="/music" />

            <Route render={() => <Settings />} path="/settings" />

        </div>
    )
}