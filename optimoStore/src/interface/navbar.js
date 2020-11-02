import React, {Component, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
//import {mycart,mydel} from '../actions/addPro';


const Navbar =(props)=>{


  let [myVal, handleMyval]= useState(props.myGoods)
    useEffect(()=>{
      let x = JSON.parse(localStorage.getItem('cart'))
      handleMyval(x)
      
    },[props.myGoods])


    // const change=()=>{
    //     handleMyval(myVal+1)
    // }


  return(
    <React.Fragment>
        <nav>
        <nav className="navbar navbar-expand-lg text-white " style={{backgroundColor:'#131921'}} >
         <Link className="navbar-brand text-white" to="/userHome"><h1>OptimoStore</h1></Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
<Link className="nav-link text-white" ><span className="fa fa-map-marker m-1" ></span>Deliver to Nigeria</Link>

</li>
      <li className="nav-item active">
<Link className="nav-link text-white" to="UserHome">Home <span className="sr-only">(current)</span></Link>
</li>
<li className="nav-item">
<Link className="nav-link text-white" to="/UserReg">Register</Link>
</li>
<li className="nav-item">
<Link className="nav-link text-white" to="/adminDash">Admin Dashboard</Link>
</li>
<li className="nav-item">
<Link className="nav-link text-white" to="/AdminReg">Admin</Link>
</li>
<li className="nav-item">
<Link className="nav-link text-white" to="/adminPost"> Admin Post</Link>
</li>
<li className="nav-item">
<Link className="nav-link text-white" to=""> Returns & Orders</Link>
</li>
<li className="nav-item" >
<Link className="nav-link text-white" to="/UserCart">
    <span className="fa-stack">
    <span className="fa fa-shopping-cart fa-stack-2x"></span>
       <strong className="fa-stack-1x text-warning" style={{fontSize:80+"%", color:'black', marginTop:-3+'px'}}>
            {myVal.length}
      </strong>
</span>
<span>cart</span>
</Link>
</li>
{/* <li>
<span className="fa-stack fa-2x has-badge" data-count="5">
<i className="fa fa-circle fa-stack-2x fa-inverse"></i>
<i style={{}} className="fa fa-shopping-cart fa-stack-2x red-cart"></i>
</span>
</li> */}
</ul>
</div>
</nav>
            
            {/* <Link to = "/UserHome">home</Link>...

            <Link to = "/about">About</Link>...
            <Link to = "/UserCart">Cart</Link>...
            <Link to = "/Contact/gblack"> Call Gblack</Link>...
            <Link to ="/about">GO to Atom page </Link>...
            <Link to ="/caller">caller</Link>...
            <Link to="/howItworks">howItWorks</Link>
            <Link to="/reduxfunction" >Redux Function</Link>
            <Link to="/secondReduxFunction">SecondReduxFunction</Link>
            <Link to="/func" >myFunctionalcomponent</Link> */}

            
        </nav>
    
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
     //mySub: (price)=>dispatch(sub(price)),
   //  myAddition: ()=>dispatch(add(1)),
     //myMul: ()=>dispatch(multi()),
     // delCart: (i)=>dispatch(mydel(i))
        }
}


export default connect(mapStateToProps, addFunctionToRedux)(Navbar);
