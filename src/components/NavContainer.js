import React from 'react';
import {connect} from "react-redux";
import Nav from "./Nav";

let mapStateToProps = (state) =>{
    return{
        navLinks: state.sidebarData.navLinks,
        friends: state.sidebarData.friends
    }
}

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;