import React, { Fragment } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import * as v from '../Views/Payroll'
export default function action_attendance() {
    return (
            <Switch>
                <Route path="/Payroll/Attendance" component={v.AdminAttendance} />
            </Switch>
    )
}
