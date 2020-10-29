import React, {Component} from 'react';
import {Link} from "react-router-dom"
class Navbar extends Component {
    state= { 
//        first: "atom",
  //      second: "gblack"
    }

    render(){

        return(
            <React.Fragment>
                <nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <Link className="navbar-brand" to="/AdminLog">AdminLogin</Link>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
        <Link className="nav-link" to="UserHome">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/UserReg">Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/UserCart">UserCart</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/adminDash">Admin Dashboard</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link " to="/adminDashboard">Testing Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/AdminReg">Admin</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/myImage">image</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/adminPost"> Admin Post</Link>
      </li>
    </ul>

    <button className="btn btn-sm btn-outline-danger" onClick={this.handleSignIn}>Sign In</button>
        <button className="btn btn-sm btn-outline-success" onClick={this.handleSignOut}>Sign Out</button>
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
}

export default Navbar;