import React from "react";
import icon from '../../../../../assets/images/twitter-3-logo-png-transparent.png'

const TwitterLink = (props) =>{
    return(
        <span>
        {!(props.link === null) ?
            <a href={props.link}>
                <img src={icon} width='30px' height='30px'/>
            </a>
            : null
        }
        </span>
    )
}

export default TwitterLink;