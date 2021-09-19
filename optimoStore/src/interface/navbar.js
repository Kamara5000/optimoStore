import React, {Component, useEffect, useState} from 'react';
import {Link,NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import { logOut } from './actions';
//import {mycart,mydel} from '../actions/addPro';


const Navbar =(props)=>{

let [myVal, handleMyval]= useState(0);
let [reload, setReload] = useState(false);
    
useEffect(()=>{
      handleMyval(props.myGoods);
    },[myVal,props.myGoods,props.log])

    console.log(props.myGoods);
    console.log(props.log)
    
    
    const logUserOut=()=>{
      props.userLogOut();
   }

  return(
    <React.Fragment>
      <div className="">
      <nav className="navbar navbar-expand-md w-100 px-2  fixed-top  text-white" style={{backgroundColor:'#131921'}} >       
            <div className="navbar-header d-flex  w-100">
              <div className="mr-auto">
                <Link className="navbar-brand text-white " to="/userHome"><h1>OptimoStore</h1></Link>
              </div>
              <div className="ml-auto">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-controls="navbarNav" aria-label="Toggle navigation">
                  <span className="fa fa-bars text-white"></span>
                </button>
              </div>
            </div>

          <div className="collapse navbar-collapse w-100 "  id="navbarNav">
            <ul className="nav  justify-content-end w-100">
              <li className="nav-item ">
                <NavLink className="nav-link  "  activeClassName="active"   to="/UserHome">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link "  to="/AdminReg">Admin</NavLink>
            </li>
          
           <li className="nav-item">
             <NavLink className="nav-link " activeClassName="active"   to="/UserOrder">Orders</NavLink>
          </li>
          
          {!props.log && <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active"    to="/UserReg">Sign In</NavLink>
          </li>
          }
          
          <li className="nav-item" >
            <NavLink className="nav-link" activeClassName="active"   to="/UserCart">
              <span className="fa-stack">
                  <span className="fa fa-shopping-cart fa-stack-2x"></span>
                      <strong className="fa-stack-1x text-warning" style={{fontSize:80+"%", color:'white', marginTop:-3+'px'}}>
                     {myVal?.length}
                     </strong>
                 </span>
                <span>Cart</span>
                </NavLink>
          </li>
          {props.log && <li>
            <Link className="nav-link"     to="/userReg" style={{padding:'0',margin:'0',maxWidth: ""}}>
                    <button onClick={logUserOut} type="button" className="btn btn-sm hover-item" style={{height:'',width: "90px",borderRadius:"50px", fontSize:""}}>
                       <i className="fa fa-sign-out mr-1 " ></i>
                       Sign Out
                    </button>
                  </Link>
            </li>
          }
            
      </ul>
</div>

    
    </nav>
</div>     
    </React.Fragment>
);


}


const mapStateToProps =state=>{
  return({
      log:state.log,
      myGoods: state.addToCart
  })
}

const addFunctionToRedux=dispatch=>{
  return {
     userLogOut: ()=>dispatch(logOut())
        }
}


export default connect(mapStateToProps, addFunctionToRedux)(Navbar);
