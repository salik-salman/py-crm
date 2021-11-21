import { GET_MENU } from '../actions/types.js';

const initialstate = {
    menu: []
}

export default function(state = initialstate, action){
switch(action.type){
    case GET_MENU:
        return {
            ...state,
            menu: action.payload
        };
        default:
            return state;
}
}