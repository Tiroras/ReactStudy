import React from 'react';
import DialogItem from "./DialogItem";

export default function DialogItems(props){
    return(
        <div className="dialog-items">
            <DialogItem name="Vlad" message="DOKA2 cruto"/>

            <DialogItem name="Mur" message="DOKA2 ne cruto"/>
        </div>
    )
}