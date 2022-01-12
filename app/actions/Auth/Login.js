import axios from "axios";
import { GET_USER } from "../types";

export const getUser = (email,password) => dispatch =>{
    console.log(email,password);
    axios.get('http://crm.py/api/get/Auth/login', {
        email: email,
        password: password
      })
        .then(res => {
          dispatch({
              type: GET_USER,
              payload: res.data
          })  
        }).catch(err => console.log(err.response.data));
    }
    