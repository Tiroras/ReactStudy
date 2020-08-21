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
            friends: [
                {name: "Fafasfasf", img: " "},
                {name: "FSFASSFSAGGH", img: " "},
                {name: "hfdshfdv", img: " "}
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

    addPost(){
        let newPost = {
            id: 3,
            text: this._state.profilePage.newPostText,
            likesCount: 0,
            attachment: " "
        }

        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer){
        this._callSubscriber = observer;
    }
}



// export const addPost = () =>{
//     let newPost = {
//         id: 3,
//         text: state.profilePage.newPostText,
//         likesCount: 0,
//         attachment: " "
//     }
//
//     state.profilePage.posts.push(newPost);
//     rerenderEntireTree(state);
// }



// export const updateNewPostText = (newText) =>{
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state)
// }



// export const subscribe = (observer) =>{
//     rerenderEntireTree = observer;
// }


export default store;