<<<<<<< Updated upstream
import React,{ Component, Fragment,useState } from "react";
=======
import React,{ Component, Fragment,useEffect } from "react";
>>>>>>> Stashed changes
import ReactDOM from "react-dom";
import  Header  from "./layout/Header";
import helpers from './helpers/Helpers'
import  Menu  from "./layout/Menu";
import  Home  from "./layout/Dashboard";
<<<<<<< Updated upstream
import  Footer  from "./layout/Footer";
import Alerts from "./layout/Alerts";
import { createHashHistory } from 'history';
import * as Comp from "./controllers";
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
=======
import Login from "./views/Auth/Login"
import  Footer  from "./layout/Footer";
import Alerts from "./layout/Alerts";
import * as Comp from "./controllers";
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { setGlobalState,useGlobalState } from "./states/Index";
>>>>>>> Stashed changes
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from './store';
import './layout/style.css';
const c = {};
Object.entries(Comp).forEach(([key, value]) => {
    c[key.replace('Controller','')] = value
});
<<<<<<< Updated upstream
=======
$(document).ready(function() {
    helpers.default();
})
>>>>>>> Stashed changes
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}
export function App(){
<<<<<<< Updated upstream
=======
    const [IsLoggedIn] = useGlobalState("IsLoggedIn");
    window.addEventListener("storage",(function(e){
if(localStorage.getItem('user') == null){
setGlobalState("IsLoggedIn",false)
}
     }).bind(this)); 
     useEffect(() => {
        if(location.pathname == '/auth/login'){
            $('body').addClass('login-page');
          }else{
            $('body').removeClass('login-page');
          }
      });
>>>>>>> Stashed changes
    return (
        <div className="wrapper">
<div className="preloader flex-column justify-content-center align-items-center">
  <img className="animation__wobble" id="animation__wobble" src="img/logo.png" alt="Logo" height={100} width={150} />
</div>

        <Provider store={store}>
            <AlertProvider template={AlertTemplate}
                {...alertOptions}>
            <Fragment>
<<<<<<< Updated upstream
                <Alerts />
=======

            {localStorage.getItem("user") !== null || IsLoggedIn === true ?
                <><Alerts />
>>>>>>> Stashed changes
                <Header />
                <Menu />
                    <div className="content-wrapper">
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route exact path="/" component={c.Routes} />
                    <Route component={c.Routes} />
<<<<<<< Updated upstream
                        </Switch>                
                    </div>
                        <Footer/>
=======
                        </Switch>
                    </div>
                        <Footer/></>
                       : <Login/>}
>>>>>>> Stashed changes
            </Fragment>
            </AlertProvider>
        </Provider>
        </div>
    )
}
ReactDOM.render((
    <BrowserRouter basename="/" >
    <App/>
    </BrowserRouter>
<<<<<<< Updated upstream
  ), document.getElementById('app'));
=======
  ), document.getElementById('app'));
>>>>>>> Stashed changes
