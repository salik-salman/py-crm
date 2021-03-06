import React, { Component } from 'react'
import { connect } from 'react-redux';
import proptypes from 'prop-types'
import { AddEmployee } from '../../../actions/Payroll/attendance';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export class Form extends Component {
    state = {
        Employee_name: '',
        Employee_email: '',
        Employee_gender: '',
        Emp_address: '',
        Emp_city: '',
        Emp_is_active: '',
        Emp_role: ''
    }

static proptypes = {
    AddEmployee: proptypes.func.isRequired
}

onChange = (e) => this.setState({ [e.target.name]: e.target.value });


onSubmit = (e) => {
    e.preventDefault();
    const { Employee_name,Employee_email,Employee_gender,Emp_address,Emp_city,Emp_is_active,Emp_role } = this.state;
    const employee = {Employee_name,Employee_email,Employee_gender,Emp_address,Emp_city,Emp_is_active,Emp_role};
    this.props.AddEmployee(employee)
    this.setState({
        Employee_name: '',
        Employee_email: '',
        Employee_gender: '',
        Emp_address: '',
        Emp_city: '',
        Emp_is_active: '',
        Emp_role: ''
      });

}

    render() {
        const { Employee_name,Employee_email,Employee_gender,Emp_address,Emp_city,Emp_is_active,Emp_role } = this.state;
        return (
          <>
<div className="card">
  <div className="card-header">
    <h3 className="card-title">Add Employee</h3>
  </div>
  <div className="card-body">
    <table id="example1" className="table table-bordered table-striped">
      {/* <thead>
        <tr>
          <th>Rendering engine</th>
          <th>Browser</th>
          <th>Platform(s)</th>
          <th>Engine version</th>
          <th>CSS grade</th>
        </tr>
      </thead> */}
      <tbody>
        <tr>
          <td> <input
              className="form-control"
              type="text"
              name="Employee_name"
              onChange={this.onChange}
              value={Employee_name}
            /></td>
          <td> <input
              className="form-control"
              type="email"
              name="Employee_email"
              onChange={this.onChange}
              value={Employee_email}
            />
          </td>
          <td><select
              className="form-control"
              name="Employee_gender"
              onChange={this.onChange}
              value={Employee_gender}

            >
            <option>Please Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            </select></td>
          <td>  <input
              className="form-control"
              type="text"
              name="Emp_address"
              onChange={this.onChange}
              value={Emp_address}
            /></td>
            <td> <input
            className="form-control"
            type="text"
            name="Emp_city"
            onChange={this.onChange}
            value={Emp_city}
          /></td>
          <td><select
              className="form-control"
              name="Emp_is_active"
              onChange={this.onChange}
              value={Emp_is_active}
            >
                <option value="">Please Select The Employee State</option>
                <option value="1">Employee Is Activated</option>
                <option value="0">Employee Is Not Activated</option>
                </select></td><td><select
              className="form-control"
              name="Emp_role"
              onChange={this.onChange}
              value={Emp_role}
            >
                <option value="">Please Select Role</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
                </select></td>
        </tr>
       </tbody>
    </table>
  </div>
</div>

            <div className="card card-body mt-4 mb-4">
        <form onSubmit={this.onSubmit}>
          <div className="form-inline">
            <button type="Submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      </>
        )
    }
}

export default connect(null, {  AddEmployee })(Form);
