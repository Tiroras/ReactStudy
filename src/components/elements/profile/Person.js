import React from 'react';
import classes from '../../styles/profile/Person.module.css';

export default function Person(){
    return(
        <div className={classes.person}>


            <div className={classes.image}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"}/>
            </div>



            <div className={classes.info}>

                <div className={classes.name_family}>
                    Тутур Тутуров
                </div>

                <div className="age">
                    23
                </div>

                <div className="location">
                    Москва
                </div>

                <div className="education">
                    ПТУ
                </div>


            </div>
        </div>
    )
}