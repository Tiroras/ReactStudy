import React from 'react'
import classes from '../../styles/profile/NewPost.module.css'

export default class NewPost extends React.Component{
    render() {
        return(
            <div className={classes.newPost}>
                <div className={classes.input}>
                    <input type="text" />
                </div>

                <div className={classes.button}>
                    <button>Опубликовать</button>
                </div>
            </div>
        )
    }
}