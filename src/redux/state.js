const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store ={
    _callSubscriber(){
        console.log("rerender has changed")
    },

    _state: {

        dialogsPage: {
            messages: [
                {name: "fafafsfafs", message: "fafsfafsfsa"},
                {name: "ghfdhhsdhsd", message: "gfasfsaffsfsaf"}
            ],

            dialogs: [
                {name: "Vlad", message: "Olololololollolol"},
                {name: "VRas", message: "Mololololo"}
            ],
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

            newPostText: 'it-kama'
        }
    },

    getState(){
      return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },


    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 3,
                text: this._state.profilePage.newPostText,
                likesCount: 0,
                attachment: " "
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }

        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}



export const addPostActionCreator = () =>{
    return { type: ADD_POST}
}



export const updateNewPostTextActionCreator = (text) =>{
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default store;
window.store = store;