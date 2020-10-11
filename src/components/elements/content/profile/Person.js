import React from 'react';
import classes from '../../../styles/profile/Person.module.css';
import Preloader from "../../../common/preloader/Preloader";
import LookingForAJobTrue from "./lookingForAJob/LookingForAJobTrue";
import LookingForAJobFalse from "./lookingForAJob/LookingForAJobFalse";
import GitHubLink from "./contacts/GitHubLink";
import VkLink from "./contacts/VkLink";
import FacebookLink from "./contacts/FacebookLink";
import InstagramLink from "./contacts/InstagramLink";
import TwitterLink from "./contacts/TwitterLink";
import YoutubeLink from "./contacts/YoutubeLink";
import userPhoto from "../../../../assets/images/user.png";
import Status from "./Status";
import StatusWithHooks from "./StatusWithHooks";

export default function Person(props){
    if (!props.profile){
        return <Preloader />
    }

    return(
        <div className={classes.person}>


            <div className={classes.image}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
            </div>



            <div className={classes.info}>

                <div className={classes.name_family}>
                    {props.profile.fullName}
                </div>

                <div className="lookingForAJob">
                    {props.profile.lookingForAJob ? <LookingForAJobTrue /> : <LookingForAJobFalse />}
                    {props.profile.lookingForAJobDescription}
                </div>

                <div className="contacts">
                    <span>
                        <GitHubLink link={props.profile.contacts.github}/>
                        <VkLink link={props.profile.contacts.vk} />
                        <FacebookLink link={props.profile.contacts.facebook} />
                        <InstagramLink link={props.profile.contacts.instagram}/>
                        <TwitterLink link={props.profile.contacts.twitter} />
                        {props.profile.contacts.website}
                        <YoutubeLink link={props.profile.contacts.youtube}/>
                        {props.profile.contacts.mainLink}
                    </span>
                </div>

                <StatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}