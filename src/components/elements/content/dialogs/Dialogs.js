import React from 'react'
import DialogItems from "./DialogItems";
import Messages from "./Messages";
import classes from '../../../styles/Dialogs.module.css'
import {Redirect} from "react-router-dom";

export default function Dialogs(props){

    if(props.isAuth === false){
        return <Redirect to={"/login"} />
    }

    return(
        <div className={classes.block}>

            <div>
                <DialogItems
                    data = {props.dialogs}
                />
            </div>

            <div>
                <Messages
                    data ={props.messages}
                    newMessageBody={props.newMessageBody}
                    onMessageChange={props.updateNewMessageBody}
                    sendMessage={props.sendMessage}
                    // dispatch={props.dispatch}
                />
            </div>

        </div>
    )
}