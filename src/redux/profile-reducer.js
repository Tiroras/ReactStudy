const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState ={
    posts: [
        {id: 1, text: "fafsfasf", likesCount: 111, attachment: " "},
        {id: 2, text: "fafsfasf", likesCount: 111, attachment: " "}
    ],

    newPostText: 'Новый пост'
}

const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 3,
                text: state.newPostText,
                likesCount: 0,
                attachment: " "
            }

            state.posts.push(newPost);
            state.newPostText = '';

            return state;
        }

        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }

        default: return state;
    }

    return state;
}

export default profileReducer;


export const addPostActionCreator = () =>{
    return { type: ADD_POST}
}
export const updateNewPostTextActionCreator = (text) =>{
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}