import React, { Component } from 'react';
import 'whatwg-fetch';


class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Products: []
    };

    this.newProduct = this.newProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this._modifyProduct = this._modifyProduct.bind(this);
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(json => {
        this.setState({
          products: json
        });
      });
  }

  newProduct() {
    fetch('/api/products', { method: 'POST' })
      .then(res => res.json())
      .then(json => {
        let data = this.state.products;
        data.push(json);

        this.setState({
          products: data
        });
      });
  }

  

  deleteProduct(index) {
    const id = this.state.Products[index]._id;

    fetch(`/api/Products/${id}`, { method: 'DELETE' })
      .then(_ => {
        this._modifyProduct(index, null);
      });
  }

  _modifyProduct(index, data) {
    let prevData = this.state.Products;

    if (data) {
      prevData[index] = data;
    } else {
      prevData.splice(index, 1);
    }

    this.setState({
      Products: prevData
    });
  }

  render() {
    return (
      <>
        <p>Products:</p>

        <ul>
          { this.state.Products.map((Product, i) => (
            <li key={i}>
              <span>{Product.count} </span>
              <button onClick={() => this.submitChanges(i)}>Submit</button>
              <button onClick={() => this.decrementProduct(i)}>-</button>
              <button onClick={() => this.deleteProduct(i)}>x</button>
            </li>
          )) }
        </ul>

        <button onClick={this.newProduct}>New Product</button>
      </>
    );
  }
}

export default Products;
