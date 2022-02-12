import axios from "axios";
import helpers from "../helpers/Helpers";

const API_URL = "http://crm.py/api/post/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  const data = helpers.genForm({"email":username,"password":password});
  return axios
    .post(API_URL + "signin", data,{
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};