import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch

} from 'react-router-dom'


import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/pages/Home';
import Login from "./components/pages/Login";
// import Wrapper from "./components/Wrapper";
import Admin from "./components/pages/Admin";
import FishGallery from "./components/pages/FishGallery";
import Newsletter from "./components/pages/Newsletter";
import Inventory from "./components/pages/Inventory";
import Products from "./components/pages/Products";
import Counters from "./components/pages/Counters";
import Checkout from "./components/pages/Checkout";
import ProductTable from "./components/pages/ProductTable";
import Contact from "./components/pages/Contact";
import { Security } from '@okta/okta-react';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
render((
  <Router>
                <Security
client_Id = '0oafq1bebpKt2MC6A0h7'
 issuer =  'https://dev-121546.oktapreview.com/oauth2/default'

          redirect_uri= 'http://localhost:8080/home'
        >
    <div>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
		    <Route path="/home" component={Home}/>
        <Route exact path="/counters" component={Counters}/>
        <Route exact path="/products" component={Products} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/newsletter" component={Newsletter} />
        <Route path="/fishgallery" component={FishGallery} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Route path="/product_table" component={ProductTable} />
        <Route path="/login" component={Login} />
        <Route path="/checkout" component={Checkout} />
        <Route component={NotFound}/>
      </Switch>
    </App>
    </div>
    </Security>
  </Router>
), document.getElementById('app'));
