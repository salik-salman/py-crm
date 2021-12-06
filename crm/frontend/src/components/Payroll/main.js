import React, { Fragment } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Employees from './Attendance/Employees'

export default function Payroll() {
    return (
        <div className="content-wrapper">
        <Fragment>
            <Switch>
                <Route path="/Payroll/Attendance" component={Employees} />
            </Switch>        
        </Fragment>
                </div>
    )
}
