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

              <Nav
                  // data={props.data.sidebarData}
              />

              <Content
                  // profileData={props.data.profileData}
                  // dialogsData={props.data.dialogsData}
                  // dispatch={props.dispatch}
              />

            </div>
        </BrowserRouter>
    )
}



export default App;