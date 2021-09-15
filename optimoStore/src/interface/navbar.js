import React, {Component, useEffect, useState} from 'react';
import {Link,NavLink} from "react-router-dom";
import {connect} from 'react-redux';
//import {mycart,mydel} from '../actions/addPro';


const Navbar =(props)=>{


  let [myVal, handleMyval]= useState(0)
    useEffect(()=>{
      // let x = JSON.parse(localStorage.getItem('cart'))
      handleMyval(props.myGoods)
    },[myVal,props.myGoods])

    console.log(props.myGoods);
    
    // const change=()=>{
    //     handleMyval(myVal+1)
    // }


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
            <ul className="nav  justify-content-end ">
              <li className="nav-item ">
                <NavLink className="nav-link  "  activeClassName="active"   to="UserHome">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " activeClassName="active"     to="/adminDash">Dash</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link "  to="/AdminReg">Admin</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " activeClassName="active"   to="/adminPost"> Post</NavLink>
            </li>
           <li className="nav-item">
             <NavLink className="nav-link " activeClassName="active"   to="/UserOrder">Orders</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active"    to="/UserReg">SignIn</NavLink>
            </li>
            <li className="nav-item" >
            <NavLink className="nav-link" activeClassName="active"   to="/UserCart">
              <span className="fa-stack">
                  <span className="fa fa-shopping-cart fa-stack-2x"></span>
                      <strong className="fa-stack-1x text-warning" style={{fontSize:80+"%", color:'white', marginTop:-3+'px'}}>
                     {myVal?.length}
                     </strong>
                 </span>
                <span>cart</span>
                </NavLink>
          </li>
      </ul>
</div>

    
    </nav>
</div>     
    </React.Fragment>
);


}


const mapStateToProps =state=>{
  return({
      myNum:state.num,
      myGoods: state.addToCart
  })
}

const addFunctionToRedux=dispatch=>{
  return {
     // delCart: (i)=>dispatch(mydel(i))
        }
}


export default connect(mapStateToProps, addFunctionToRedux)(Navbar);
