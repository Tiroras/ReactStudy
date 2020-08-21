import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/state";

let rerenderEntireTree = (store) =>{
    ReactDOM.render(
        <App data={store.getState()} addPost={store.addPost} updateNewPost={store.updateNewPostText}/>,
        document.getElementById('root')
    );
}

store._callSubscriber(store.getState());

store.subscribe(rerenderEntireTree);