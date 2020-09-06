import React from "react";
import icon from '../../../../assets/images/png-clipart-instagram-logo-icon-instagram-icon-text-logo.png'

const InstagramLink = (props) =>{
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

export default InstagramLink;