import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import '../Components-CSS/SignUp.css'

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: '',
            email: '',
            password: '',
            mobile: '',
            gstno: '',
            shopname: ''

        };
    }

    assignValueToStates = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    registerNewUser = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { fullname, email, password, gstno, shopname, mobile } = this.state;
        return (
            <>
                <Form className='signup-form' onSubmit={this.registerNewUser}>
                    <div className='input-field'>
                        <label htmlFor='fullname'> Full Name : </label>
                        <input type={'text'} name='fullname' value={fullname} onChange={this.assignValueToStates} placeholder='Enter Your Name' id='fullname' required/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='mobile'> Mobile No. : </label>
                        <input type={'number'} name='mobile' value={mobile} onChange={this.assignValueToStates} placeholder='Enter Your mobile number' id='mobile' required/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='GSTNO'> GST No. : </label>
                        <input type={'text'} name='gstno' value={gstno} onChange={this.assignValueToStates} placeholder='Enter new GST Number' id='GSTNO'required />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='shop-name'> Shop Name : </label>
                        <input type={'text'} name='shopname' value={shopname} onChange={this.assignValueToStates} placeholder='Enter new shop name' id='shop-name'required />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='email'> Email : </label>
                        <input type={'email'} name='email' value={email} onChange={this.assignValueToStates} placeholder='Enter valid email' id='email' required />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'> Password : </label>
                        <input type={'password'} name='password' value={password} onChange={this.assignValueToStates} placeholder='Enter new Password' id='password' required/>
                    </div>
                    <div className='input-field'> <Button type='submit' variant="dark">Sign Up</Button></div>

                </Form>
            </>
        );
    }
}


// #endregion

export default SignUp;