import React, { Component,Fragment } from 'react';
import { withAlert } from "react-alert";
import Form from './Form';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getAttendance } from '../../../actions/Payroll/attendance'
import { deleteEmployee } from '../../../actions/Payroll/attendance'
export class Employees extends Component {
    static propTypes = {
        attendance:propTypes.array.isRequired,
        getAttendance: propTypes.func.isRequired,
        deleteEmployee: propTypes.func.isRequired
    }
componentDidMount(){
    this.props.getAttendance();
}
    render() {
        return (
            <><br />
            <Fragment>
            <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" data-bs-toggle="tab" href="#Form">Form</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="tab" href="#attendance">Employees</a>
  </li>
</ul>
<div id="myTabContent" className="tab-content">
  <div className="tab-pane fade active show" id="Form">
                        <Form />
 </div>
  <div className="tab-pane fade" id="attendance">
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th>Employee ID</th>
                                    <th>Employee Name</th>
                                    <th>Employee Email</th>
                                    <th>Employee Gender</th>
                                    <th>Employee Address</th>
                                    <th>Employee City</th>
                                    <th>Employee Active State</th>
                                    <th>Employee Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.attendance.map(employee => (
                                    <tr key={employee.Emp_id}>
                                        <td>{employee.Emp_id}</td>
                                        <td>{employee.Employee_name}</td>
                                        <td>{employee.Employee_email}</td>
                                        <td>{employee.Employee_gender}</td>
                                        <td>{employee.Emp_address}</td>
                                        <td>{employee.Emp_city}</td>
                                        <td>{employee.Emp_is_active}</td>
                                        <td>{employee.Emp_role}</td>
                                        <td><button onClick={this.props.deleteEmployee.bind(this, employee.Emp_id)} className="btn btn-danger btn-sm">Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

  </div>
</div>  
            </Fragment></>
        )
    }
}

const mapStateToProps = state => ({
    attendance: state.attendance.attendance
})

export default connect(mapStateToProps, { getAttendance, deleteEmployee })(withAlert()(Employees));