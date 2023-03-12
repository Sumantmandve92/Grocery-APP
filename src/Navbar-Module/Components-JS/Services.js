import React, { Component } from "react";
import { Button } from "react-bootstrap";
import AddProducts from "../../Services-JS/AddProducts";
class Services extends Component
{
    constructor()
    {
        super();
        this.state={

        }
    }
    render(){


        return (
            <>
            
      <AddProducts/>
            </>
        );

    }
    
}
export default Services;