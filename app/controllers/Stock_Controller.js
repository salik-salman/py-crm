import React from 'react'
import * as v from '../views/Stock'
import { Switch, Route, Router } from 'react-router-dom';
const Stock = {
    default: function(){
        return(
            <Switch>
            <Route path="/StockManagement/Stock_Opening" component={v.AdminStock} />
            </Switch>
            )
    },
    opening: function(param1){
        return(<h2>Test Opening</h2>)
    },
    helper3: function(param1, param2){

    }
}

export default Stock