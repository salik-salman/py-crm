import axios from "axios";
import React from "react";
import { getUser } from '../actions/Auth/Login'
import { GET_MENU } from "../actions/types";
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
    genForm: function(data) {
        var form = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            form.append(key,value); 
        });
        return form;
    },
    alert:function(message,label,type = false) {
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
          if(type == true){
              toastr.success(label,message)  
          }else{
        toastr.error(label,message)  
          }
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
        const form = this.genForm({email:email,password:pass});
        axios.post('http://crm.py/api/post/Auth/login', form,{
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then(res => {
        //   dispatch({
        //       type: GET_USER,
        //       payload: res.data
        //   })  
        {this.alert('Success',res.data.message,true)}
        }).catch(err => this.alert(err.response.data.data));
        setTimeout(function(){
console.clear();
       }, 200);//wait 2 seconds       
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