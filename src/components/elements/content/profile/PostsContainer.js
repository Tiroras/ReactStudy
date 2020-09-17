import {addPostActionCreator} from "../../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return{
        posts: state.profileData.posts
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: (newPost) =>{
            dispatch(addPostActionCreator(newPost));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;