import axios from "axios";
import { GET_ATTEDANCE, DELETE_EMPLOYEE, ADD_EMPLOYEE, GET_ERRORS, GET_SUCCESS } from "../types";

// GET ATTENDANCE
export const getAttendance = () => dispatch =>{
axios.get('/api/attendance/')
    .then(res => {
      dispatch({
          type: GET_ATTEDANCE,
          payload: res.data
      })  
    }).catch(err => console.log(err.response.data));
}

// Delete Employee
export const deleteEmployee = (Emp_id) => dispatch =>{
  axios.delete(`/api/attendance/${Emp_id}/`)
      .then(res => {
        dispatch({
            type: DELETE_EMPLOYEE,
            payload: Emp_id
        })  
      }).catch(err => console.log(err));
  }

  export const AddEmployee = Employee => dispatch =>{
    axios.post("/api/attendance/",Employee)
        .then(res => {
          dispatch({
              type: ADD_EMPLOYEE,
              payload: res.data
          })  
          dispatch({
            type: GET_SUCCESS,
            payload: res.data
          })
        }).catch(err => {
          const errors = {
            msg: err.response.data,
            status: err.response.status
          }
          dispatch({
            type: GET_ERRORS,
            payload: errors
          })
        });
    }

    export const EditEmployee = Employee => dispatch =>{
      axios.put("/api/attendance/",Employee)
          .then(res => {
            dispatch({
                type: ADD_EMPLOYEE,
                payload: res.data
            })  
          })
      }