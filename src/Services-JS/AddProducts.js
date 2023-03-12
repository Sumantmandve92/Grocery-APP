import React from 'react';
import {Form,Button} from 'react-bootstrap';
import '../Navbar-Module/Components-CSS/SignUp.css';
import LocalStorage from  '../LocalStorage';


/**
 * 
 */
class AddProducts extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        itemId:0,
        itemName:'',
        category:'',
        expiryDate:'',
        retailPrice:0,
        purchasePrice:0,
        quantity:0
    };
}
// C:\Users\ADMIN\Desktop\Grocery\inventory-app\src\Navbar-Module\Components-CSS\SignUp.css
assignValueToStates = (e) => {
    this.setState({...this.state,
        [e.target.name]: e.target.value
    });
    console.log(JSON.stringify(this.state));
}
addProduct= async(e)=>{
    e.preventDefault();
    console.log("before");
    console.log(this.state);
    let url="http://localhost:5000/register";
    const settings={
        method:'POST',
        headers:{
           
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    }
    let res=await fetch(url,settings);
    let data=await res.json();
    console.log("after");
    console.log(data);
    
    // let obj=new LocalStorage();
    // obj.state.products.push(this.state);
    // console.log(obj.state.products)
}
    render() {
        const {itemId,itemName,category,expiryDate,retailPrice,purchasePrice,quantity}=this.state;
        return (
            <>
                <Form className='addProduct-form' onSubmit={this.addProduct}>
                    <div className='input-field'>
                        <label htmlFor='itemId'> Item Id : </label>
                        <input type={'text'} name='itemId' value={itemId} onChange={this.assignValueToStates} placeholder='Enter Your itemId' id='itemId' required />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='itemName'> Item name. : </label>
                        <input type={'text'} name='itemName' value={itemName} onChange={this.assignValueToStates} placeholder='Enter Your item Name' id='itemName' required />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='category'> Category : </label>
                        <input type={'text'} name='category' value={category} onChange={this.assignValueToStates} placeholder='Enter category' id='category' required/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='expiryDate'> Expiry Date : </label>
                        <input type={'date'} name='expiryDate' value={expiryDate} onChange={this.assignValueToStates} placeholder='Enter expiry Date' id='expiryDate' required />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='retailPrice'>Retail Price : </label>
                        <input type={'number'} name='retailPrice' value={retailPrice} onChange={this.assignValueToStates} placeholder='Enter retail Price' id='retailPrice' required />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='purchasePrice'> Purchase Price : </label>
                        <input type={'number'} name='purchasePrice' value={purchasePrice} onChange={this.assignValueToStates} placeholder='Enter purchase Price' id='purchasePrice' required/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='quantity'> Quantity : </label>
                        <input type={'number'} name='quantity' value={quantity} onChange={this.assignValueToStates} placeholder='Enter quantity' id='quantity' required />
                    </div>
                    
                    <div className='input-field'> <Button type='submit' variant="dark">Add To Store</Button></div>

                </Form>
                {
                   

                    this.state.quantity ?<LocalStorage product={this.state}/>:<></>
                }
            </>
        );
    }
}



export default AddProducts;