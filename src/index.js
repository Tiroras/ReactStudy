import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store'
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App
            // data={state}
            // dispatch={store.dispatch.bind(store)}
        />
    </Provider>,
document.getElementById('root'))
