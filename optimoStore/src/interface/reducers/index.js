import {combineReducers} from "redux";
import IsUserLog from "./log";
import addToCart from './addToCart'

const allReducers = combineReducers({
    log:IsUserLog,addToCart
})

export default allReducers;