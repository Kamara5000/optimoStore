import React, {Component} from "react";
import {Link} from 'react-router-dom'

function adminHoc(IncomingComponent){
    return class extends Component{
        constructor(props){
            super(props);
        } 

        anything = "Ayo"
        render(){

            let check = JSON.parse(localStorage.getItem("adminLog"));
            return(
                <React.Fragment>
                    {check?
                <IncomingComponent {...this.props}  any={this.anything}  />: 
                <div style={{marginTop:"10rem", textAlign:"center"}}><h1>Dear Admin Please <Link to="/AdminReg">Log in</Link> to View Your Dashboard</h1> </div> }
                
                </React.Fragment>
                
            )
        }


    } 
}

export default adminHoc;