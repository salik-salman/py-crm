import React from 'react'
import * as v from '../views/Auth'
import { Switch, Route, Router } from 'react-router-dom';
const Auth = {
    default: function(){
        return(
            $('body').addClass('login-page'),
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
}

export default Auth