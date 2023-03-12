import React from 'react';




/**
 * 
 */
class LocalStorage extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        products:[]
    };
}
 async componentDidMount()
{
   await this.state.products.push(this.props.product);
   console.log(this.state.products);
}

render(){
    return;
}
}





// #endregion

export default LocalStorage;