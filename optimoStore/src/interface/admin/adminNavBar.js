import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const AdminNavBar=(props)=>{
  
  const logOut=()=>{
      localStorage.removeItem("adminLog");
      localStorage.removeItem("admin");
  }


return(
      <React.Fragment>
       
        
        {/* style={{position:'fixed', width:'100%', height: '100%', position: 'relative'}} */}

<div className="side-nav "style={{position:'fixed', width:'100%', height: '100%', position: 'relative'}}  >
        <div className="">
          <ul style={{listStyleType:"none"}}>

              <li>
                <Link className="nav-link"     to="/admin/home" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="fa fa-home mr-4 " ></i>
                        Admin Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link"    to="/adminAddProduct" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="fa fa-plus mr-4 " ></i>
                        Add Product
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link"     to="/admin/profile" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="fa fa-user-circle mr-4 " ></i>
                        Admin Profile
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link"     to="/admin/Home" style={{padding:'0',margin:'0',maxWidth: "100%"}}>
                    <button onClick={logOut} type="button" className="btn btn-sm   btn-basic hover-item" style={{height:'50px',maxWidth: "100%",borderRadius:"50px", fontSize:"23px"}}>
                       <i className="fa fa-sign-out mr-4 " ></i>
                       Log Out
                    </button>
                  </Link>
                </li>
            </ul>
        </div>    
      </div>



      </React.Fragment>
  )
}
export default AdminNavBar;