import React, { Component } from 'react';
import 'whatwg-fetch';
import ProductForm from './ProductForm';
import "../Style/Admin.css";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this.addProduct = this.addProduct.bind(this);
    // this.newCounter = this.newCounter.bind(this);
    // this.incrementCounter = this.incrementCounter.bind(this);
    // this.decrementCounter = this.decrementCounter.bind(this);
    // this.deleteCounter = this.deleteCounter.bind(this);

    // this._modifyCounter = this._modifyCounter.bind(this);
  }
//get the products into the state object
  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(json => {
        this.setState({
          products: json
        });
      });
  }

  renderProducts() {
    return   _.map(this.props.products, product => {
        return (
            <li className="list-group-item" key={product.id}>
               {product.title}
           </li>
        )
    });
   }

  addProduct(formData) {
      
    fetch('/api/products', { method: 'POST', body:formData })
      .then(res => res.json())
      .then(json => {
        let data = this.state.products;
        data.push(json);

        this.setState({
          products: data
        });
      });
  }

  // incrementCounter(index) {
  //   const id = this.state.counters[index]._id;

  //   fetch(`/api/counters/${id}/increment`, { method: 'PUT' })
  //     .then(res => res.json())
  //     .then(json => {
  //       this._modifyCounter(index, json);
  //     });
  // }

  // decrementCounter(index) {
  //   const id = this.state.counters[index]._id;

  //   fetch(`/api/counters/${id}/decrement`, { method: 'PUT' })
  //     .then(res => res.json())
  //     .then(json => {
  //       this._modifyCounter(index, json);
  //     });
  // }

  // deleteCounter(index) {
  //   const id = this.state.counters[index]._id;

  //   fetch(`/api/counters/${id}`, { method: 'DELETE' })
  //     .then(_ => {
  //       this._modifyCounter(index, null);
  //     });
  // }

  // _modifyCounter(index, data) {
  //   let prevData = this.state.counters;

  //   if (data) {
  //     prevData[index] = data;
  //   } else {
  //     prevData.splice(index, 1);
  //   }

  //   this.setState({
  //     counters: prevData
  //   });
  // }

  render() {
    return (
      <div className="row">
            <div className="col-12">
      <div className="admin">
     
        <div className="productform">
        <h2>Add New Product:</h2>
        <ProductForm />
        </div>
      </div>
      </div>
    </div>
    );
  }
}
 
export default Admin;
