import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../Components-CSS/SignUp.css'

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
        console.log("sign up call");
    }


    assignValueToStates = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log("hjh");
    }
    login = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { email, password } = this.state;
        console.log("render");
        return (
            <>
                <Form className='signin-form' onSubmit={this.login}>
                    <div className='input-field'>
                        <label htmlFor='email'> Email : </label>
                        <input type={'email'} name='email' value={email} onChange={this.assignValueToStates} placeholder='Enter valid email' id='email' required/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'> Password : </label>
                        <input type={'password'} name='password' value={password} onChange={this.assignValueToStates} placeholder='Enter new Password' id='password' required />
                    </div>
                    <div className='input-field'> <Button type='submit' variant="dark">Sign In</Button></div>
                    <div className='input-field'><Link className="register" to={'/register'}>New User. . .  </Link></div>
                </Form>
            </>
        );
    }
}
// #endregion

export default SignIn;