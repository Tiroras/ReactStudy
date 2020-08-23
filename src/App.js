import React from 'react';
import './App.css'
import Header from "./components/Header";
import Nav from "./components/Nav";
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Content from "./components/Content";



function App(props){
    return(
        <BrowserRouter>
            <div className="app-wrapper">
              <Header />

              <Nav data={props.data.sidebar} />

              <Content
                  data={props.data}
                  dispatch={props.dispatch}
              />

            </div>
        </BrowserRouter>
    )
}



export default App;