import axios from "axios";
import { GET_MENU } from "./types";

// GET MENU
export const getMenu = () => dispatch =>{
axios.get('/api/menu/')
    .then(res => {
      dispatch({
          type: GET_MENU,
          payload: res.data
      })  
    }).catch(err => console.log(err.response.data));
}