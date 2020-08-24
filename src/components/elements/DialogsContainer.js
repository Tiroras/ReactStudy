import React from 'react';
import Dialogs from "./Dialogs";
import StoreContext from "../../store-context";

export default function DialogsContainer(props){

    return(
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsData
                return (
                    <Dialogs
                        dialogs={state.dialogs}
                        messages={state.dialogs}
                        newMessagesBody={state.newMessageBody}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}