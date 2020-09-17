import React from 'react';
import './App.css'
import Content from "./components/Content";
import NavContainer from "./components/NavContainer";
import HeaderContainer from "./components/HeaderContainer";
import {BrowserRouter} from "react-router-dom";



function App(props){
    return(
        <BrowserRouter>
            <div className="app-wrapper">
              <HeaderContainer />

              <NavContainer />

              <Content />

            </div>
        </BrowserRouter>
    )
}



export default App;