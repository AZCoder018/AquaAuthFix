import React from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import { withAuth } from '@okta/okta-react';
import "../Style/Login.css";


export default withAuth(class Login extends React.Component{
  constructor(){
    super();
    this.state = {  user: null };
var config = {
  baseUrl: 'https://dev-121546.oktapreview.com',
  clientId: '0oafq1bebpKt2MC6A0h7',
  redirectUri: 'http://localhost:8080/home',
  authParams: {
  // issuer: 'https://dev-121546.oktapreview.com/oauth2/default',
   scopes: ['openid', 'email', 'profile', 'address', 'phone'],
    responseType: 'id_token'
  }
};
config['features.registration'] = true;

// config['authScheme'] = 'SESSION'; //
    this.widget = new OktaSignIn(config);

    this.showLogin = this.showLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    this.widget.session.get((response) => {
      if(response.status !== 'INACTIVE'){
        this.setState({user:response.login});
       
      }else{
        this.showLogin();
      }
    });
  }

  showLogin(){
    Backbone.history.stop();
    this.widget.renderEl({el:this.loginContainer},
      (response) => {
    
        this.setState({user: response.claims.email});
        localStorage.setItem('okta-token-storage', JSON.stringify(response.claims));
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout(){
    this.widget.signOut(() => {
      this.setState({user: null});
      this.showLogin();
    });
  }

  render(){
    return(
      <div className="login">
        {this.state.user ? (
          <div className="container">
            <div>Welcome, {this.state.user}!</div>
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : null}
        {this.state.user ? null : (
          <div ref={(div) => {this.loginContainer = div; }} />
        )}
      </div>
    );
  }
});