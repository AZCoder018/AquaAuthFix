import React from 'react';
import { withAuth } from '@okta/okta-react';
import "../Style/Checkout.css";
import { O_RDONLY } from 'constants';

export default withAuth(class Checkout extends React.Component{

  state = {
    claims: []
  };

  constructor(){
    super();
    // state = {
    //   currentUserEmail: '',
    //   currentUserName: '',
    //   currentUserAddress: ''
  

  }

  componentDidMount() {
     const myClaims = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      claims: myClaims
    });
  }

  // showLogin(){
  //   Backbone.history.stop();
  //   this.widget.renderEl({el:this.loginContainer},
  //     (response) => {
  //       this.setState({user: response.claims.address});
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  handleSubmit(event) {
        
    event.preventDefault();

    // this.props.history.push('/checkout');
    var myBody = { cart: { order_items : [ { product: { product_code : "NA10001", 
                                                        type: "Dry Goods", 
                                                        description: "food", 
                                                        cost: 100.00, 
                                                        price: 200.00, 
                                                        qty_on_hand: 500, 
                                                        is_active: true, 
                                                        image_data: ''}, 
                                             count: 50, 
                                             total_price: 10000.00 } ] },
                  customer: { first_name: "Jason",
                              last_name: "Meadows",
                              username: "jason.meadows.esq@hotmail.com",
                              address: "4902 East Thomas Rd., Apt. 178",
                              city: "Phoenix",
                              state: "AZ",
                              zip: "85018", 
                              phone: "(509)671-6711",
                              payment_type: "Debit",
                              name_on_card: "Jason Heath Meadows",
                              credit_card_number: "5892 34034921 232323",
                              expiration_date: "10/22",
                              cvv: "589"
                            },
                  total_price: 120000,
                  date_time: "08/19/2018"
                };
    fetch('/api/orders', {
      method:'POST',
      body: myBody
    }).then(alert("Order has been added."));
  }

  render(){

    // const { currentUserEmail, currentUserName, currentUserAddress } = this.state;
    const myClaims = JSON.parse(localStorage.getItem('okta-token-storage'));
    // const h = this.state.claims.address.street_address;
    return( 
    

<div class="container">
  <h2 id="checkoutHead">Checkout</h2>

  <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Product name</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Second product</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$8</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Third item</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form class="redeem card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Promo code">
              </input>
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>

      <div class="col-md-8 order-md-1">
       <h4 class="mb-3">Billing address</h4>
          <form class="needs-validation" novalidate="">
          <div class="row">
          <div class="firtName col-md-10">
          <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder={myClaims.given_name} required="">
                </input>
          </div>
          </div>
        
          <div class="lastName col-md-10">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder={myClaims.family_name} required="">
                </input>
                </div>
    
            <div class="userName col-md-10">
              <label for="email">Username (E-mail)</label>
              <input type="email" class="form-control" id="email" placeholder={myClaims.email}>
              </input>
              </div>
              <div class="address col-md-10">
              <label for="address">Address</label>
              <input type="text" class="form-control" id="address" placeholder={myClaims.address.street_address} required="">
              </input>
              </div>
              <div class="city col-md-7 mb-6">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city" placeholder={myClaims.address.locality} required="">
                </input>
              </div>
              <div class="state col-md-7 mb-6">
                <label for="state">State</label>
                <input type="text" class="form-control" id="state" placeholder={myClaims.address.region} required="">
                </input>
                </div>
              <div class="zip col-md-4 mb-3">
                <label for="zip">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder={myClaims.address.postal_code} required="">
                </input>
                </div>
                <hr class="mb-4"></hr>
            <h4 class="mb-3">Payment</h4>
            <div class="d-block my-3">
              <div class="credit custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                </input>
                <label class="custom-control-label" for="credit">Credit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                </input>
                <label class="custom-control-label" for="debit">Debit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">
                </input>
                <label class="custom-control-label" for="paypal">Paypal</label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                </input>
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              </div>
              <div class="ccNumber col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                </input>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
              <div class ="row">
              <div class="cvv col-md-3 mb-3">
                <label for="cc-expiration">Expiration date</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                </input>
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
              <div class="cvv col-md-3 mb-3">
                <label for="cvv">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                </input>
                </div>
                </div>
              <hr class="mb-4"></hr>
            <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={this.handleSubmit}  >Submit Your Order</button>
            <br></br>
          </form>
      </div>
    </div>
    </div>
    );
  }
});
