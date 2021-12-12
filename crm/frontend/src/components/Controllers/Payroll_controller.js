import React, { Fragment } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import * as v from '../Views/Payroll'
console.log(v);
export default function action_attendance() {
    return (
        // <div className="content-wrapper">
        // {/* <Fragment> */}
            <Switch>
                <Route path="/Payroll/Attendance" component={v.AdminAttendance} />
            </Switch>        
        // {/* </Fragment> */}
                // </div>
    )
}
