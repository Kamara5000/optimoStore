import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./interface/about";
import Notexist from "./interface/notexist";
import Navbar from "./interface/navbar";
import Caller from "./interface/caller";

import UserHome from './interface/users/userHome';
import AdminDashBoard from './interface/admin/adminDashBoard';
import AdminReg from './interface/admin/adminReg';
import AdminLog from './interface/admin/adminLog';
import AdminPost from './interface/admin/adminPost';
import UserReg from './interface/users/userReg';
import UserCart from './interface/users/userCart';
import UserCheckOut from './interface/users/userCheckOut';
import UserLog from './interface/users/userLog';
import adminDash from './interface/admin/adminDash';
import adminDashBoard from './interface/admin/adminDashBoard';


//import SecondReduxFunction from './interface/secondReduxFunction'
//import MyFunctionalComponent from './interface/myFunctionalComponent';


class App extends Component {

  state = {
    
 }

 handleSignIn=()=>{
     this.setState({signIn:true});
 }

 handleSignOut=()=>{
     this.setState({signIn:false});
 }


    render(){

      console.log(this.props)
      return (
        
        <div>     
        <BrowserRouter>
        <Navbar> 
       </Navbar>
        <Switch>
        <Route exact path="/" component={About}/>
        
        <Route path="/First" component={UserHome} />
        <Route path="/First" component={adminDash} />
        <Route path="/UserReg" component={UserReg} />
        <Route path="/UserCart" component={UserCart} />
        <Route path="/UserCheckout" component={UserCheckOut} />
        <Route path="/UserLog" component={UserLog} />
        <Route path="/AdminReg" component={AdminReg} />
        <Route path="/AdminLog" component={AdminLog} />
        <Route path="/AdminPost" component={AdminPost} />
        <Route path="/adminDashboard" component={adminDashBoard} />
        <Route path="/reduxFunction" component={UserHome} />
        <Route path="/adminDash" component={adminDash} />
        <Route  path="/about"  render = {props=><About {...props} checkSignIn={this.state.signIn} />} />
        <Route path="/UserHome" render ={props=><UserHome {...props} checkSignIn={this.state.signIn}/>}/>
      <Route path="/caller" render={props=><Caller {...props} checkSignIn={this.state.signIn}/>} />

        
        <Route  component={Notexist}/>
        </Switch>
        </BrowserRouter>
       </div>
      );



    }

}

export default App;

