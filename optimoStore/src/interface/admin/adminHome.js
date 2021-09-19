import React, {Component, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import axios from 'axios';
import AdminNavBar from './adminNavBar';
import AdminDash from './adminDash';
import AdminPost from './adminPost';
import adminHoc from './adminHoc';

const AdminHome =(props)=>{


  let [myVal, handleMyval]= useState()
   


  return(
    <React.Fragment>
     <div className="container-fluid"> 
                <div className="row" style={{marginTop:"8rem"}}>
                <h1 className="col-sm-12 text-center mb-4">Admin Dashboard</h1>
                    <div className="col-sm-3" style={{backgroundColor:'#FFFFFF'}}>
                    <AdminNavBar/>   
                    </div>

                    <div className="col-sm-9">
                      <AdminPost/>
                    </div>

                </div>
             </div>
      
            
    </React.Fragment>
);


}


export default adminHoc(AdminHome);