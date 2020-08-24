import React from 'react';
import DialogItem from "./DialogItem";
import classes from '../../styles/dialogs/DialogItems.module.css';
import StoreContext from "../../../store-context";

export default function DialogItems(props){

    return(
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsData
                return (
                    <div className={classes.block}>
                        {state.dialogs.map((prop => (
                            <DialogItem key={props.id} name={prop.name} message={prop.message}/>
                        )))}
                    </div>)
            }}
        </StoreContext.Consumer>
    )
}