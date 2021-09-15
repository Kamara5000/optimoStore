import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const AdminNavBar=(props)=>{
  
  const logOut=()=>{
      localStorage.removeItem("log");
      props.history.push('/adminReg');
  }


 return(
      <React.Fragment>

<h1>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/AdminLog">Admin Home</Link>

  <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
   <li className="nav-item active">
      <Link className="nav-link" to="/adminLog/adminDash">Add Product</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/adminLog/adminReg">Register</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="">Profile</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="">Orders</Link>
    </li>
    </ul>
    </div>
    </nav>

</h1>



      </React.Fragment>
  )
}
export default AdminNavBar;