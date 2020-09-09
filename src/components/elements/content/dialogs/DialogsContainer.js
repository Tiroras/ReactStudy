import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
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
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageTextCreator(body))
        },

        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}


let AuthRedirectComponent = withAuthRedirect(Dialogs);


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);