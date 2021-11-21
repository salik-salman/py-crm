import React, { Component } from 'react'
import { connect } from 'react-redux';
import proptypes from 'prop-types'
import { AddEmployee } from '../../actions/attendance';


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
            <div className="card card-body mt-4 mb-4">
        <h2>Add Employee</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-inline">
            <label>Employee Name</label>
            <input
              className="form-control"
              type="text"
              name="Employee_name"
              onChange={this.onChange}
              value={Employee_name}
            />
          </div>
          <div className="form-inline">
            <label>Employee Email</label>
            <input
              className="form-control"
              type="email"
              name="Employee_email"
              onChange={this.onChange}
              value={Employee_email}
            />
          </div>
          <div className="form-inline">
            <label>Employee Gender</label>
            <select
              className="form-select"
              name="Employee_gender"
              onChange={this.onChange}
              value={Employee_gender}

            >
            <option>Please Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            </select>
          </div>
          <div className="form-inline">
            <label>Address</label>
            <input
              className="form-control"
              type="text"
              name="Emp_address"
              onChange={this.onChange}
              value={Emp_address}
            />
          </div> 
          <div className="form-inline">
          <label>City</label>
          <input
            className="form-control"
            type="text"
            name="Emp_city"
            onChange={this.onChange}
            value={Emp_city}
          />
          </div> 
          <div className="form-inline">
            <label>Is Active</label>
            <select
              className="form-select"
              name="Emp_is_active"
              onChange={this.onChange}
              value={Emp_is_active}
            >
                <option value="">Please Select The Employee State</option>
                <option value="1">Employee Is Activated</option>
                <option value="0">Employee Is Not Activated</option>
                </select>
          </div>
           <div className="form-inline">
            <label>Employee Role</label>
            <select
              className="form-select"
              name="Emp_role"
              onChange={this.onChange}
              value={Emp_role}
            >
                <option value="">Please Select Role</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
                </select>
          </div>
          <br></br>
          <div className="form-inline">
            <button type="Submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
        )
    }
}

export default connect(null, {  AddEmployee })(Form);
