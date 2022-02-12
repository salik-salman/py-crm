<<<<<<< Updated upstream
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
=======
import React from "react";
import axios from "axios";

// import {Redirect} from 'react-router-dom';
import {setGlobalState, useGlobalState} from '../states/Index'
import { GET_MENU } from "../actions/types";
var isAuthenticated_user;
// const [theme, setTheme] = useState(false);
const helpers = {
    default: function(){
        if(this.getCookie("Theme") != ''){
            $('span:contains("Dark Mode")').prev().click();
        }else{
            return this.setting('layout','Theme_setting','s:4:Dark;')
            .then((data) => {
                if(data == true){
                    this.setCookie("Theme","Dark",30);
                    $('span:contains("Dark Mode")').prev().click();
                    }
            });
        }
        $(document).ready(function(){
            var h = helpers;
>>>>>>> Stashed changes
        })
    },
    calculateLine: function(){
        console.log('Grid_Helper');
    },
    genForm: function(data) {
        var form = new FormData();
        Object.entries(data).forEach(([key, value]) => {
<<<<<<< Updated upstream
            form.append(key,value); 
        });
        return form;
    },
=======
            form.append(key,value);
        });
        return form;
    },
    setCookie: function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      },
      getCookie: function(cname) {
        var name526 = cname + "=";
        var i;
        var ca = document.cookie.split(';');
        for(var E = 0; i < ca.length; E++) {
          var a1 = ca[E];
          while (a1.charAt(0) == ' ') {
              a1 = a1.substring(1);
          }
          if (a1.indexOf(name526) == 0) {
            return a1.substring(name526.length, a1.length);
          }
        }
        return "";
      },
      checkCookie: function(cname) {
        if (this.getCookie(cname) !== undefined) {
            return true
        } else {
            return false
        }
      }
    ,
    setting: function($c = '',$k = '', $v = '') {
        // var data = this.genForm({c:$c,k:$k,v:$v});
        return axios.post('/api/settings/Check',{c:$c,k:$k,v:$v})
        .then(res => {
              return res.data
        }).catch(err => console.log(err));
    },
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              toastr.success(label,message)  
          }else{
        toastr.error(label,message)  
=======
              toastr.success(label,message)
          }else{
        toastr.error(label,message)
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
      getUser:function() {
        if(localStorage.getItem("user") !== null){
            return JSON.parse(localStorage.getItem("user"));
        }else{
            return false;
        }
      },
      isLoggedIn: function(){
        if(localStorage.getItem("user") == null){
            return false;
        }else{
            return true;
        }
      },
    queryAll: function(query = '',table) {
axios.get('/api/'+table+'/')
    .then(res => {
          console.log(res.data)
    }).catch(err => console.log(err.response));
}
}

export default helpers;
>>>>>>> Stashed changes
