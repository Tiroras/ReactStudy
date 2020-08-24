import React from 'react';
import StoreContext from "../../../store-context";
import Dialogs from "./Dialogs";

export default function DialogItems(props){

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