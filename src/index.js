import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import store from "./redux/store";
import store from './redux/redux-store'
import StoreContext, {Provider} from "./store-context";

let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <Provider store={store}>
            <App
                // data={state}
                // dispatch={store.dispatch.bind(store)}
            />
        </Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});