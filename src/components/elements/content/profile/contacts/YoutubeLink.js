import React from "react";
import icon from '../../../../../assets/images/youtube-n-logo-png-11545514814wzxfobuwrg.png'

const YoutubeLink = (props) =>{
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

export default YoutubeLink;