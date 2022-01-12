import React from 'react'
import * as v from '../views/Payroll'
import { Switch, Route, Router } from 'react-router-dom';
const Payroll = {
    default: function(){
        return(
            <Switch>
                <Route path="/Payroll/Attendance" component={v.AdminAttendance} />
            </Switch>
            )
    }
}

export default Payroll