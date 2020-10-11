import React from 'react';
import './App.css'
import Content from "./components/Content";
import NavContainer from "./components/NavContainer";
import HeaderContainer from "./components/HeaderContainer";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";



class App extends React.Component{
    componentDidMount(){
        this.props.initializeApp();
    }

    // componentDidUpdate(){
    //     this.props.authentication();
    // }


    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <div className="app-wrapper">
                <HeaderContainer/>

                <NavContainer/>

                <Content/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);