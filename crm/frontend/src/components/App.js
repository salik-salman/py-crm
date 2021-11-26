import React,{ Component, Fragment } from "react";
import ReactDOM from "react-dom";
import  Header  from "./layout/Header";
import  Menu  from "./layout/Menu";
// import  Dashboard  from "./layout/Dashboard";
import  Footer  from "./layout/Footer";
import Alerts from "./layout/Alerts";
import { createHashHistory } from 'history';
const hashHistory = createHashHistory();
import Dashboard from "./main";
import {Provider} from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store';
import './layout/style.css';


//Alert Options

const alertOptions = {
    timeout: 3000,
    position: 'top center'
}
 
class App extends Component{
    // state = {
    //     loading: true
    //   };
    
    // shouldComponentUpdate() {
    //       console.log('test')
    //     // this simulates an async action, after which the component will render the content
    //     // demoAsyncCall().then(() => this.setState({ loading: false }));
    //   }
render(){
    // const { loading } = this.state;
    // if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    //     return null; // render null when app is not ready
    //   }
    return (
        <div className="wrapper">
        {/* Preloader */}
<div className="preloader flex-column justify-content-center align-items-center">
  <img className="animation__wobble" id="animation__wobble" src="static/img/logo.png" alt="Logo" height={100} width={150} />
</div>

        <Provider store={store}>
            <AlertProvider template={AlertTemplate}
                {...alertOptions}>
            <Fragment>
                <Alerts />
                <Header />
                <Menu />
                <Switch>
                            <Route path="/Payroll/Attendance" component={Dashboard} />
                            <Route exact path="/#" component={App} />
                            <Route render={() => <div className='content-wrapper'><h1 className="text-center">Page Not Found<br></br>404</h1></div>} />
                        </Switch>                
                        <Footer/>
            </Fragment>
            </AlertProvider>
        </Provider>
        {/* <script>$(document).ready(function() {
        //   $('[data-widget="sidebar-search"]').SidebarSearch()  
        })</script> */}

        </div>
    )
}
}
// function demoAsyncCall() {
//     return new Promise((resolve) => setTimeout(() => resolve(), 2500));
//   }
ReactDOM.render((
    <Router basename="/" history={hashHistory}>
    <App/>
    </Router>
  ), document.getElementById('app'));