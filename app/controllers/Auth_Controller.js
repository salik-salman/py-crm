import React from 'react'
<<<<<<< Updated upstream
import * as v from '../views/Auth'
import { Switch, Route, Router } from 'react-router-dom';
=======
import {setGlobalState} from '../states/Index'
import helpers from '../helpers/Helpers';
import axios from 'axios';
import * as v from '../views/Auth'
import { Switch, Route, Redirect } from 'react-router-dom';
>>>>>>> Stashed changes
const Auth = {
    default: function(){
        return(
            $('body').addClass('login-page'),
<<<<<<< Updated upstream
        //    <v.Login/>
            <Switch>
                <Route path="/Auth/Login" component={v.Login} />
                {/* <Route path="/" component={v.Login} /> */}
            </Switch>
            )
    },
    checkLogin: function (user,pass){
if(user == 'sa@sa.sa' && pass == 'sa'){
    console.log(this.state)
}
    }
=======
            <Switch>
                <Route path="/Auth/Login" component={v.Login} />
            </Switch>
            )
    },
    logout: function (){
        localStorage.removeItem("user");
        setGlobalState("IsLoggedIn",false);
      },
    Login_check: function(email,pass){
    const form = helpers.genForm({email:email,password:pass});
    return axios.post('/api/Auth/signin', form)
    .then((res) => {
        if(res.data.message == 'Login Successful. :)'){
            helpers.alert('Success',res.data.message,true);
        }else{
            helpers.alert('Error',res.data.data);
        }
    return res.data;
    })
},
>>>>>>> Stashed changes
}

export default Auth