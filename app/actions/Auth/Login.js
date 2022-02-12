<<<<<<< Updated upstream
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
    
=======
// import axios from "axios";
// import { GET_USER } from "../types";

// export const checkLogin = (email,password) => dispatch =>{
//   var form = new FormData();
//       form.append('email',email); 
//       form.append('password',password); 
//     axios.post('http://crm.py/api/post/Auth/login', form,{
//       headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//     })
//         .then(res => {
//           console.log(data)
//           dispatch({
//               type: GET_USER,
//               payload: res.data.data
//           })  
//         }).catch(err => console.log(err.response.data));
//     }
    
import { SET_MESSAGE, CLEAR_MESSAGE } from "../types";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../types";

import AuthService from "../../services/auth.service";

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
>>>>>>> Stashed changes
