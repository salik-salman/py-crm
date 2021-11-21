import React,{ Component, Fragment } from "react";
import ReactDOM from "react-dom";
import  Header  from "./layout/Header";
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
    timeout: 5000,
    position: 'top center'
}
 
class App extends Component{
    state = {
        loading: true
      };
    
      componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({ loading: false }));
      }
render(){
    const { loading } = this.state;
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
        return null; // render null when app is not ready
      }
    return (
        <Provider store={store}>
            <AlertProvider template={AlertTemplate}
                {...alertOptions}>
            <Fragment>
                <Header />
                <Alerts />
                <div className="container">
                <Switch>
                            <Route path="/attendance" component={Dashboard} />
                            {/* <Route exact path="/" component={App} /> */}
                            {/* <Route component={Notfound} /> */}
                        </Switch>                </div>
            </Fragment>
            </AlertProvider>
        </Provider>
    )
}
}
function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }
ReactDOM.render((
    <Router basename="/" history={hashHistory}>
    <App/>
    </Router>
  ), document.getElementById('app'));