import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./interface/about";
import Notexist from "./interface/notexist";
import Navbar from "./interface/navbar";
import UserHome from './interface/users/userHome';
import AdminReg from './interface/admin/adminReg';
import AdminPost from './interface/admin/adminPost';
import UserReg from './interface/users/userReg';
import UserCart from './interface/users/userCart';
import UserOrder from './interface/users/userOrders';
import UserCheckOut from './interface/users/userCheckOut';
import UserLog from './interface/users/userLog';
import Footer from './interface/footer';
import AdminHome from './interface/admin/adminHome';
import AdminAddProduct from './interface/admin/adminAddProduct';
import AdminProfile from './interface/admin/adminProfile';


//import SecondReduxFunction from './interface/secondReduxFunction'
//import MyFunctionalComponent from './interface/myFunctionalComponent';


class App extends Component {

  state = {
    
 }




    render(){

      console.log(this.props)
      return (
        
        <div>     
        <BrowserRouter>
        <Navbar ></Navbar>
        <Switch>
        <Route exact path="/" component={UserHome}/>
        <Route path="/UserReg" component={UserReg} />
        <Route path="/UserCart" component={UserCart} />
        <Route path="/UserCheckout" component={UserCheckOut} />
        <Route path="/UserLog" component={UserLog} />
        <Route path="/UserOrder" component={UserOrder} />
        <Route path="/admin/home" component={AdminHome}/>
        <Route path="/AdminReg" component={AdminReg} />
        <Route path="/AdminPost" component={AdminPost} />
        <Route path="/admin/profile" component={AdminProfile}/>
        <Route path="/adminAddProduct" component={AdminAddProduct} />
        <Route  path="/about"  render = {props=><About {...props} />} />
        <Route path="/UserHome" render ={props=><UserHome {...props}/>}/>
        <Route  component={Notexist}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
       </div>
      );



    }

}

export default App;

