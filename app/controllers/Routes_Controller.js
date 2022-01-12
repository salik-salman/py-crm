import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Comp from "./";
import  Home  from "../layout/Dashboard";
import NotFound from "../layout/NotFound";
const c = {};
Object.entries(Comp).forEach(([key, value]) => {
    c[key.replace('Controller','')] = value
});
export default function Routes() {
    return (
            <Switch>
                <Route path="/Payroll" component={c.Payroll.default} />
                <Route path="/Auth" component={c.Auth.default} />
                <Route exact path="/StockManagement" component={c.Stock.default} />
                <Route path="/StockManagement/*" component={c.Stock.default} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
    )
}
