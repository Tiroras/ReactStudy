import React from "react";
import icon from '../../../../assets/images/25231.png'

const GitHubLink = (props) =>{
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

export default GitHubLink;