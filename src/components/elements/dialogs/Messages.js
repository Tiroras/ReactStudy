import React from 'react';
import Message from "./Message";
import classes from "../../styles/dialogs/Messages.module.css"
import NewMessageContainer from "./NewMessageContainer";
import StoreContext from "../../../store-context";

export default function Messages(props) {

    return(
        <div className={classes.block}>

            <StoreContext.Consumer>
                {(store) => {
                    let state = store.getState().dialogsData.messages;
                    return (<div>
                        {state.map((prop) => (
                            <Message key={prop.id} name={prop.name} message={prop.message}/>
                        ))}
                    </div>
                )}}
            </StoreContext.Consumer>

            <NewMessageContainer
                // dispatch={props.dispatch}
                // newMessageBody={props.newMessageBody}
            />

        </div>
    )
}