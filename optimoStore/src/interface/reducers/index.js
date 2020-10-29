import {combineReducers} from "redux";
import myNum from "./num"
import allGoods from "./allgoods";
import addProduct from "./addProduct";
import addToCart from './addToCart'

const allReducers = combineReducers({
    num:myNum, allGoods, addProduct,addToCart
})

export default allReducers;