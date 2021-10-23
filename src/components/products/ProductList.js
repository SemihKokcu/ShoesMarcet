import React, { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []}
}

componentDidMount() {
    this.getProducts();
}

getProducts = () => {
    fetch("http://localhost:3000/products")
    .then(response=>response.json())
    .then(data=>this.setState({products:data}));;
}
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default ProductList;
