import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import LocalStorage from "../../LocalStorage";
class AllProducts extends Component {


    constructor(props) {
        super(props);

        this.state = {
            products: []

        }
    }
    // ===========================================================
    componentDidMount = async () => {

        // fetching all products from database as component is loaded
    //      const url = 'http://localhost:5000/register';
    //     const data = await fetch(url);
    //  let product1 = await data.json();
    //  console.log(product1);
        let products = [
            {
                itemId: 1,
                itemName: 'maggi',
                brand:"TATA",
                category: 'noodles',
                expiryDate: '4/12/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            },
            {
                itemId: 54,
                itemName: 'yeppee',
                brand:"TATA",
                category: 'noodles',
                expiryDate: '1/2/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            },
            {
                itemId: 1,
                itemName: 'maggi',
                brand:"TATA",
                category: 'noodles',
                expiryDate: '1/2/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            },
            {
                itemId: 1,
                itemName: 'maggi',
                category: 'noodles',
                brand:"TATA",
                expiryDate: '6/5/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            },
            {
                itemId: 1,
                itemName: 'maggi',
                category: 'noodles',
                brand:"TATA",
                expiryDate: '5/2/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            },

            {
                itemId: 1,
                itemName: 'maggi',
                category: 'noodles',
                brand:"TATA",
                expiryDate: '5/2/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            },

            {
                itemId: 1,
                itemName: 'maggi',
                category: 'noodles',
                brand:"TATA",
                expiryDate: '5/2/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            },

            {
                itemId: 1,
                itemName: 'maggi',
                category: 'noodles',
                brand:"TATA",
                expiryDate: '5/2/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            },

            {
                itemId: 1,
                itemName: 'maggi',
                brand:"TATA",
                category: 'noodles',
                expiryDate: '5/2/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            },

            {
                itemId: 1,
                itemName: 'maggi',
                category: 'hair oil',
                brand:"TATA",
                expiryDate: '5/2/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            },

            {
                itemId: 1,
                itemName: 'maggi',
                category: 'cosmetics',
                brand:"TATA",
                expiryDate: '5/2/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            },

            {
                itemId: 1,
                itemName: 'maggi',
                category: 'masala',
                brand:"TATA",
                expiryDate: '5/2/2023',
                retailPrice: 12,
                purchasePrice: 10,
                quantity: 100
            }

        ]
        // assume above products come from API result
        // sort products
        products.sort((a, b) => {
            if (a.category< b.category) {
                return -1;
            }
            else if(a.itemName<b.itemName)
            {
                return -1
            }
            else
            {
                return 0;
            }
        })

        this.setState({ products });
    }
    // ============================================================
    render() {
        let date = new Date();
        date = date.toLocaleDateString();
        console.log(date)
        // console.log( date.toLocaleDateString()>"5/1/2023");
        return (
            <>
                <Table bordered striped variant={"primary"}>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Product Id</th>
                            <th>Product name</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Expiry Date <br />(MM/DD/YYYY)</th>
                            <th>Retail Price</th>
                            <th>Purchase Price</th>
                            <th>Remaining Items <br /> in Store</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((product, i) =>

                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{product.itemId}</td>
                                    <td>{product.itemName}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                    {
                                        product.expiryDate < date ?
                                            <td style={{ color: "red", fontWeight: "700" }}>{product.expiryDate} <br /><div className="btn btn-danger">Expired</div></td>
                                            : <td style={{ color: "green", fontWeight: "700" }}>{product.expiryDate}</td>
                                    }

                                    <td>{product.retailPrice}</td>
                                    <td>{product.purchasePrice}</td>
                                    <td>{product.quantity}</td>
                                    <td><Button className="btn">Delete</Button><Button>Edit</Button> </td>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>

            </>
        );
    }
}


export default AllProducts;