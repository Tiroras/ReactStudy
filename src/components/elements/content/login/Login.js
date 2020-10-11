import React from 'react';
import classes from '../../../styles/login/Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/formscontrol/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength = maxLengthCreator(20)

let LoginForm = (props) =>{
    return(
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    placeholder={'Email'}
                    name={'email'}
                    validate={[required, maxLength]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    placeholder={'Password'}
                    name={'password'}
                    validate={[required, maxLength]}
                    type={'password'}
                 />
            </div>
            {/*<div>*/}
            {/*    <Field*/}
            {/*        component={Input}*/}
            {/*        placeholder={'Repeat password'}*/}
            {/*        name={'repeatPassword'}*/}
            {/*        validate={[required, maxLength]}*/}
            {/*    />*/}
            {/*</div>*/}
            <span>
                <Field
                    component={Input}
                    type={'checkbox'}
                    name={'rememberMe'}
                /> Remember me
            </span>
            {props.error && <span>
                {props.error}
            </span>}
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return(
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);