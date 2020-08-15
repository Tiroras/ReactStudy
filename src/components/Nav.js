import React from 'react';
import classes from './styles/Nav.module.css';

export default function Nav(){
    return(
        <nav className={classes.nav}>

            <div>
                <a>Profile</a>
            </div>

            <div>
                <a>Messages</a>
            </div>

            <div>
                <a>News</a>
            </div>

            <div>
                <a>Music</a>
            </div>

            <div>
                Settings
            </div>


        </nav>
    )
}