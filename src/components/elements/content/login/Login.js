import React from 'react';
import classes from '../../../styles/login/Login.module.css'
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../../../api/api";
import {Input} from "../../../common/formscontrol/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

const maxLength = maxLengthCreator(20)

let LoginForm = (props) =>{
    return(
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    placeholder={'Login'}
                    name={'login'}
                    validate={[required, maxLength]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    placeholder={'Password'}
                    name={'password'}
                    validate={[required, maxLength]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    placeholder={'Repeat password'}
                    name={'repeatPassword'}
                    validate={[required, maxLength]}
                />
            </div>
            <span>
                <Field
                    component={Input}
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
        authAPI.login(formData.email, formData.password, formData.rememberMe)
    }

    return(
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login;