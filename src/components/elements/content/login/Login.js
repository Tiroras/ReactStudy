import React from 'react';
import classes from '../../../styles/login/Login.module.css'
import {Field, reduxForm} from "redux-form";

let LoginForm = (props) =>{
    return(
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'input'}
                    placeholder={'Login'}
                    name={'login'}
                />
            </div>
            <div>
                <Field
                    component={'input'}
                    placeholder={'Password'}
                    name={'password'}
                />
            </div>
            <div>
                <Field
                    component={'input'}
                    placeholder={'Repeat password'}
                    name={'repeatPassword'}
                />
            </div>
            <span>
                <Field
                    component={'input'}
                    type={'checkbox'}
                    name={'rememberMe'}
                /> Remember me
            </span>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) =>{
    const onSubmit = (formData) =>{
        console.log(formData)
    }

    return(
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;