import axios from "axios";
import { GET_MENU } from "../types";

// GET MENU
export const getMenu = () => dispatch =>{
<<<<<<< Updated upstream
axios.get('http://crm.py/api/get/Menu/')
=======
axios.get('/api/Menu')
>>>>>>> Stashed changes
    .then(res => {
      dispatch({
          type: GET_MENU,
          payload: res.data
      })  
    }).catch(err => console.log(err.response.data));
}