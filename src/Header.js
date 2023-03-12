import React from 'react';
import {Link} from 'react-router-dom'

/**
 * 
 */
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount(){
        console.log("cdm of Header")
    }
    render() {

console.log("Header render");
        return (
            <>
                <div className='header-container'>
                    <div className='logo'>S-MART</div>
                    <div className='navbar'>

                        <div><Link className='nav-Route' to={'/allproducts'}>All Product</Link></div>
                        <div><Link className='nav-Route' to={"/admin"}>Admin</Link></div>
                        <div><Link className='nav-Route' to={'/services'}>Services</Link></div>
                        <div><Link className='nav-Route' to={'/about'}>About Us</Link></div>
                        <div><Link className='nav-Route' to={'/login'}>Sign In</Link></div>
                        <div><Link className='nav-Route'>Logout</Link></div>
                    </div>
                </div>


            </>
        );


    }
}


// #endregion

export default Header;