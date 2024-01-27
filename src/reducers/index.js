import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    task: taskReducer
})

export default rootReducer;