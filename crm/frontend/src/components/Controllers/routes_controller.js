import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Comp from "./";
import NotFound from "../layout/NotFound";
const c = {};
Object.entries(Comp).forEach(([key, value]) => {
    c[key.replace('Controller','')] = value
});
export default function Routes() {
    return (
            <Switch>
                <Route path="/Payroll" component={c.Payroll.default} />
                <Route exact path="/StockManagement" component={c.Stock.default} />
                <Route path="/StockManagement/*" component={c.Stock.default} />
                <Route component={NotFound} />
            </Switch>
    )
}
