import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store ={
    _callSubscriber(){
        console.log("rerender has changed")
    },

    _state: {

        dialogsPage: {
            messages: [
                {id: 1, name: "fafafsfafs", message: "fafsfafsfsa"},
                {id: 2, name: "ghfdhhsdhsd", message: "gfasfsaffsfsaf"}
            ],

            dialogs: [
                {id: 1, name: "Vlad", message: "Olololololollolol"},
                {id: 2, name: "VRas", message: "Mololololo"}
            ],

            newMessageBody: ' '
        },

        sidebar: {
            navLinks:[
                {title: 'Profile', href: '/profile'},
                {title: 'Dialogs', href: '/dialogs'},
                {title: 'News', href: '/news'},
                {title: 'Music', href: '/music'},
                {title: 'Settings', href: '/settings'}
            ],

            friends: [
                {name: "Fafasfasf", img: "./ "},
                {name: "FSFASSFSAGGH", img: "./ "},
                {name: "hfdshfdv", img: "./ "}
            ],
        },

        profilePage: {
            posts: [
                {id: 1, text: "fafsfasf", likesCount: 111, attachment: " "},
                {id: 2, text: "fafsfasf", likesCount: 111, attachment: " "}
            ],

            newPostText: 'Новый пост'
        }
    },

    getState(){
      return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },


    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}





export default store;
window.store = store;