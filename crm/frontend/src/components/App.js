import React,{ Component, Fragment } from "react";
import ReactDOM from "react-dom";
import  Header  from "./layout/Header";
import helpers from '../../static/js/Helpers'
import  Menu  from "./layout/Menu";
import  Home  from "./layout/Dashboard";
import  Footer  from "./layout/Footer";
import Alerts from "./layout/Alerts";
import NotFound from "./layout/NotFound";
import { createHashHistory } from 'history';
import * as Comp from "./Controllers";
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store';
import './layout/style.css';
// helpers.default();
const c = {};
Object.entries(Comp).forEach(([key, value]) => {
    c[key.replace('Controller','')] = value
});
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}
 
class App extends Component{
render(){
    return (
        <div className="wrapper">
<div className="preloader flex-column justify-content-center align-items-center">
  <img className="animation__wobble" id="animation__wobble" src="/static/img/logo.png" alt="Logo" height={100} width={150} />
</div>

        <Provider store={store}>
            <AlertProvider template={AlertTemplate}
                {...alertOptions}>
            <Fragment>
                <Alerts />
                <Header />
                <Menu />
                    <div className="content-wrapper">
                <Switch>
                    <Route path="/Payroll" component={c.Payroll} />
                    <Route path="/StockManagement" component={c.Stock} />
                    <Route path="/Home" component={Home} />
                    <Route exact path="/#" component={App} />
                    <Route component={NotFound} />
                        </Switch>                
                    </div>
                        <Footer/>
            </Fragment>
            </AlertProvider>
        </Provider>
        </div>
    )
}
}
ReactDOM.render((
    <BrowserRouter basename="/" >
    <App/>
    </BrowserRouter>
  ), document.getElementById('app'));