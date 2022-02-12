<<<<<<< Updated upstream
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Comp from "./";
import  Home  from "../layout/Dashboard";
import NotFound from "../layout/NotFound";
=======
import React,{ Component,useEffect,useRef, Fragment,useState } from "react";
import helpers from '../helpers/Helpers'
import { Switch, Route } from 'react-router-dom';
import * as Comp from "./";
import NotFound from "../layout/NotFound";
import Home from "../layout/Dashboard";
>>>>>>> Stashed changes
const c = {};
Object.entries(Comp).forEach(([key, value]) => {
    c[key.replace('Controller','')] = value
});
export default function Routes() {
<<<<<<< Updated upstream
    return (
            <Switch>
=======
    return ( 
        <Switch>
>>>>>>> Stashed changes
                <Route path="/Payroll" component={c.Payroll.default} />
                <Route path="/Auth" component={c.Auth.default} />
                <Route exact path="/StockManagement" component={c.Stock.default} />
                <Route path="/StockManagement/*" component={c.Stock.default} />
                <Route exact path="/" component={Home} />
<<<<<<< Updated upstream
                <Route component={NotFound} />
            </Switch>
=======
                <Route component={NotFound} /></Switch>
            
>>>>>>> Stashed changes
    )
}
