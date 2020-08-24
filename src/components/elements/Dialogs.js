import React from 'react'
import DialogItems from "./dialogs/DialogItems";
import Messages from "./dialogs/Messages";
import classes from '../styles/Dialogs.module.css'

export default function Dialogs(props){
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
                    // dispatch={props.dispatch}
                />
            </div>

        </div>
    )
}