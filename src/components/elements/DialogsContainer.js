import React from 'react';
import Dialogs from "./Dialogs";
import StoreContext from "../../store-context";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

export default function DialogsContainer(props){

    return(
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsData

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChange = (body) =>{
                    store.dispatch(updateNewMessageTextCreator(body));
                }
                return (
                    <Dialogs
                        dialogs={state.dialogs}
                        messages={state.messages}
                        newMessageBody={state.newMessageBody}

                        sendMessage={onSendMessageClick}
                        updateMessageText={onNewMessageChange}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}

// let mapStateToProps = (state) =>{
//     return{
//         dialogsPage: state.dialogsData
//     }
// }
//
// let mapDispatchToProps = () =>{
//     return{
//         updateNewMessageBody: () => {
//
//         },
//         sendMessage: () => {}
//     }
// }
//
// const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)