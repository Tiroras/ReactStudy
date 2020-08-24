import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import StoreContext from "../../../store-context";

export default function NewMessageContainer(props){


    return( <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsData;

            let onSendMessage = () => {
                store.dispatch(sendMessageCreator());
            }

            let onMessageChange = (body) =>{
                store.dispatch(updateNewMessageTextCreator(body));
            }

            return (
                <NewMessage
                    sendMessage={onSendMessage}
                    onMessageChange={onMessageChange}
                    newMessageBody={state.newMessageBody}
                />
            )
        }}
    </StoreContext.Consumer>);
}