import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App
                // data={state}
                // dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
    </Provider>,
document.getElementById('root'))
