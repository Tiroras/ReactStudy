const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
    messages: [
        {id: 1, name: "fafafsfafs", message: "fafsfafsfsa"},
        {id: 2, name: "ghfdhhsdhsd", message: "gfasfsaffsfsaf"}
    ],

    dialogs: [
        {id: 1, name: "Vlad", message: "Olololololollolol"},
        {id: 2, name: "VRas", message: "Mololololo"}
    ]
}

const dialogsReducer = (state = initialState, action) =>{

    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 3,
                        name: "Alex",
                        message: action.newMessage
                    }
                ]
            };

            break;
        }

        default:
            return state;
            break;
    }
}

export default dialogsReducer;


export const sendMessageCreator = (newMessage) =>{
    return ({type: SEND_MESSAGE, newMessage: newMessage})
}