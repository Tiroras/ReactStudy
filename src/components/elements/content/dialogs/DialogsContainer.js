import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator} from "../../../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) =>{
    return{
        dialogs: state.dialogsData.dialogs,
        messages: state.dialogsData.messages,
        newMessageBody: state.dialogsData.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage: (newMessage) => {
            dispatch(sendMessageCreator(newMessage));
        }
    }
}



export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);