import React from 'react';
import DialogItem from "./DialogItem";
import classes from '../../styles/dialogs/DialogItems.module.css';

export default function DialogItems(props){

    return(
        <div className={classes.block}>
            {props.data.map((prop => (
                <DialogItem name={prop.name} message={prop.message} />
            )))}
        </div>
    )
}