import React from 'react'
import DialogItems from "./dialogs/DialogItems";
import Messages from "./dialogs/Messages";
import classes from '../styles/Dialogs.module.css'

export default function Dialogs(props){
    return(
        <div className={classes.block}>

            <div>
                <DialogItems data = {props.data.dialogs} />
            </div>

            <div>
                <Messages data ={props.data.messages} />
            </div>

        </div>
    )
}