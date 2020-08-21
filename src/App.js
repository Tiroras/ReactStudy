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

              <Nav friends={props.data.sidebar}/>

              <Content
                  data={props.data.state}
                  addPost={props.data.addPost}
                  updateNewPost={props.data.updateNewPostText}
              />

            </div>
        </BrowserRouter>
    )
}



export default App;