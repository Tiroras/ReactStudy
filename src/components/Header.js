import React from 'react';
import classes from './styles/Header.module.css'

export default function Header(){
    return(
        <header className={classes.header}>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"} />
        </header>
    )
}