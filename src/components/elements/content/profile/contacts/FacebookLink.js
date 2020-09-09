import React from "react";
import icon from '../../../../../assets/images/facebook_logos_PNG19748.png'

const FacebookLink = (props) =>{
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

export default FacebookLink;