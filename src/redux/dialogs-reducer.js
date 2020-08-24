const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    messages: [
        {id: 1, name: "fafafsfafs", message: "fafsfafsfsa"},
        {id: 2, name: "ghfdhhsdhsd", message: "gfasfsaffsfsaf"}
    ],

    dialogs: [
        {id: 1, name: "Vlad", message: "Olololololollolol"},
        {id: 2, name: "VRas", message: "Mololololo"}
    ],

    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEND_MESSAGE:{
            let newMessage = {
                id: 3,
                name: "Alex",
                message: state.newMessageBody
            }

            state.messages.push(newMessage);
            state.newMessageBody = '';

            return state;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageBody = action.body;

            return state;
        }

        default: return state;
    }

    return state;
}

export default dialogsReducer;


export const sendMessageCreator = () =>{
    return {type: SEND_MESSAGE}
}
export const updateNewMessageTextCreator = (body) =>{
    return {type: UPDATE_NEW_MESSAGE_TEXT, body: body}
}