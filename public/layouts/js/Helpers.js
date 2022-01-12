import axios from "axios";
import React from "react";
import { GET_MENU } from "../../src/actions/types";
var isAuthenticated_user;
const helpers = {
    default: function(){
        $(document).ready(function(){
            var h = helpers;
            h.calculateLine();
            h.Login_check();
            h.queryAll();
        })
    },
    calculateLine: function(){
        console.log('Grid_Helper');
    },
    alert:function(label,message) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
        toastr.error(label,message)  
    },
    isAuthenticated : function(check=''){
        check == true ? isAuthenticated_user = true : isAuthenticated_user = false;
if(isAuthenticated_user == true){
    return true;
}else{
    return false;
}
    },
    Login_check: function(email,pass){
        if(email == 'sa@sa.sa' && pass == 'sa'){
        this.isAuthenticated(true)
        // return isAuthenticated_user;
        console.log(isAuthenticated_user)
        return true;
    }else{
        this.isAuthenticated(false)
        return false;
        }
    },
    queryAll: function(query = '',table) {
// export const getMenu = () => dispatch =>{
axios.get('/api/'+table+'/')
    .then(res => {
    //   dispatch(
          console.log(res.data)
    //   )  
    }).catch(err => console.log(err.response));
}
    // }
}

export default helpers;