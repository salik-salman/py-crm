import { GET_ATTEDANCE,DELETE_EMPLOYEE,ADD_EMPLOYEE } from '../actions/types.js';

const initialstate = {
    attendance: []
}

export default function(state = initialstate, action){
switch(action.type){
    case GET_ATTEDANCE:
        return {
            ...state,
            attendance: action.payload
        };
    case DELETE_EMPLOYEE:
        return{
            ...state,
            attendance: state.attendance.filter(employee => employee.Emp_id !== action.payload)
        };
    case ADD_EMPLOYEE:
        return{
            ...state,
            attendance: [...state.attendance, action.payload]
        };
        default:
            return state;
}
}