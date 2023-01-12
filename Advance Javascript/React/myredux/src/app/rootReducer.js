import { combineReducers } from "redux";
import userReducers from "../feature/user/reducer";
import employeeReducers from "../feature/employee/reducer";

const rootReducer=combineReducers({
   usersss:userReducers,
   employees:employeeReducers
})

export default rootReducer;