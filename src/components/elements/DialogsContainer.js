import React from 'react';
import Dialogs from "./Dialogs";
import StoreContext from "../../store-context";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

// export default function DialogsContainer(props){
//
//     return(
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogsData
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }
//
//                 let onNewMessageChange = (body) =>{
//                     store.dispatch(updateNewMessageTextCreator(body));
//                 }
//                 return (
//                     <Dialogs
//                         dialogs={state.dialogs}
//                         messages={state.messages}
//                         newMessageBody={state.newMessageBody}
//
//                         sendMessage={onSendMessageClick}
//                         updateMessageText={onNewMessageChange}
//                     />
//                 )
//             }}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) =>{
    return{
        dialogs: state.dialogsData.dialogs,
        messages: state.dialogsData.messages,
        newMessageBody: state.dialogsData.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageTextCreator(body))
        },

        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;