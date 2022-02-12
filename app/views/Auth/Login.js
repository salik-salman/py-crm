<<<<<<< Updated upstream
import React, { Component } from 'react'
import Auth from '../../controllers/Auth_Controller'
import helpers from '../../helpers/Helpers'
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
=======
import React, {Component, useEffect, useState } from "react";
import Auth from "../../controllers/Auth_Controller";
import Home from "../../layout/Dashboard";
import { setGlobalState,useGlobalState } from "../../states/Index";
import { BrowserRouter,Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
const Login = () => {
  const [IsLoggedIn] = useGlobalState("IsLoggedIn");
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = event.target[0].value;
    const pass = event.target[1].value;
    Auth.Login_check(user,pass)
    .then((valid) => {
      if(valid.message == 'Login Successful. :)'){
        window.history.pushState("", "",document.referrer.replace(/https?:\/\/[^\/]+/i, ""))
        setGlobalState("IsLoggedIn",true);
        localStorage.setItem("user", JSON.stringify(valid.data));
        return <Home/>
      }else{
        setGlobalState("IsLoggedIn",false);
        }
    })
   .catch(err => console.log("Axios err: ", err))
  }
      if(localStorage.getItem("user") !== null || IsLoggedIn === true){
                return (window.history.pushState("", "", "/Home"),$('body').removeClass('login-page'),<Redirect to='/Home'  />);
      }
        return (
          window.history.pushState("", "", "/auth/login"),
          $('body').addClass('login-page'),
            <div>
                <div className="login-box">
>>>>>>> Stashed changes
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="/" className="h1"><b>PY</b>CRM</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
<<<<<<< Updated upstream
      <form onSubmit={this.handleSubmit}>
=======
      <form onSubmit={handleSubmit}>
>>>>>>> Stashed changes
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
<<<<<<< Updated upstream
          <input type="password" className="form-control" placeholder="Password" />
=======
          <input type="password" autoComplete="on" className="form-control" placeholder="Password" />
>>>>>>> Stashed changes
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
<<<<<<< Updated upstream
          <div className="col-8">
=======
          <div className="col-8 form-group">
>>>>>>> Stashed changes
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
<<<<<<< Updated upstream
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mt-2 mb-3">
=======
        </div>
        <div className="form-group">
        <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
          </div>
      </form>
      {/* <div className="social-auth-links text-center mt-2 mb-3">
>>>>>>> Stashed changes
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
      </div>
<<<<<<< Updated upstream
      {/* /.social-auth-links */}
=======
>>>>>>> Stashed changes
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="register.html" className="text-center">Register a new membership</a>
<<<<<<< Updated upstream
      </p>
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
=======
      </p> */}
    </div>
  </div>
>>>>>>> Stashed changes
</div>

            </div>
        )
<<<<<<< Updated upstream
    }
}
=======
}
export default Login;
>>>>>>> Stashed changes
