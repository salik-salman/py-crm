import React, { Component } from 'react'
import Auth from '../../Controllers/Auth_controller'
import helpers from '../../../../static/js/Helpers'
import { BrowserRouter,Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import { useNavigate } from "react-router-dom";
//         const history= useNavigate();

export default class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const user = event.target[0].value;
    const pass = event.target[1].value;
    if(helpers.Login_check(user,pass) == true){
      // render() {
        // if (this.state.redirect) {

        // }
        // return(
        // Your Code goes here
        // )
      // }    
    }else{
      return false;
    }
  }
    render() {
        return (
            <div>
                <div className="login-box">
  {/* /.login-logo */}
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="/" className="h1"><b>PY</b>CRM</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mt-2 mb-3">
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="register.html" className="text-center">Register a new membership</a>
      </p>
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
</div>

            </div>
        )
    }
}
