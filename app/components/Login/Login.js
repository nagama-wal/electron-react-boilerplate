import React, { Component } from "react";
import {
    Redirect
} from 'react-router-dom';
import './Login.scss';
import {
    Button, Form, FormGroup, Alert
} from 'reactstrap';
import FormInput from './FormInput'



class Login extends Component {
    constructor (props) {
        super (props)
        this.setUsername = this.setUsername.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount () {
        this.props.authenticateUser()
    }
    setUsername (e) {
        this.props.setUsername(e.target.value)
    }
    setPassword (e) {
        this.props.setPassword(e.target.value)
    }
    handleSubmit () {
        this.props.submit()
    }
    render () {
        return (
            <section className="login-div">
                {(this.props.isLoggedIn && !this.props.newCall)? <Redirect to={{pathname:'/home'}}/> : null}
                    {this.props.error ?
                        <Alert color="danger">{this.props.error}</Alert>
                        :
                        null
                    }
                <div className="login-content">
                    {(this.props.newCall && this.props.isLoggedIn )? <Redirect to={{pathname: '/dashboard'}}/> : null}
                    <div className="cl-heading">CLAS</div>
                    <div className="cl-tag">Please login with your username or email id to continue.</div>
                    <Form className="login-form">
                        <FormGroup className="formField">
                        <FormInput
                            type="email"
                            label="Username or Email ID"
                            className="email-filed"
                            labelClass="email label"
                            value={this.props.username.value}
                            onChange={this.setUsername}
                            invalid={this.props.username.error}
                        />
                            {this.props.username.showError ? <div className="error-msg">{this.props.username.error}</div> : null}
                        </FormGroup>
                        <FormGroup className="formField">
                            <FormInput
                                type="password"
                                label="Password"
                                className="email-filed"
                                labelClass="email label"
                                value={this.props.password.value}
                                onChange={this.setPassword}
                                invalid={this.props.username.showError}
                            />
                            {this.props.password.showError ? <div className="error-msg">{this.props.password.error}</div> : null}
                        </FormGroup>
                        <Button
                            className="login-button"
                            onClick={this.handleSubmit}
                        >
                            Login
                        </Button>
                    </Form>
                </div>
            </section>
        )
    }
}
export default Login
