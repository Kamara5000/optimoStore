import React, {Component} from "react";
import {Link} from 'react-router-dom';

function UserHoc(IncomingComponent){
    return class extends Component{
        constructor(props){
            super(props);
        } 

        render(){

            let check = JSON.parse(localStorage.getItem("userLog"));
            return(
                <React.Fragment>
                    <div>
                    {check?
                     <IncomingComponent {...this.props}/>: 
                    <div style={{marginTop:"7rem", textAlign:"center"}}><h1>Please 
                        <Link to="/UserReg"> <button className="btn btn-warning">Sign In</button></Link> to proceed to check out and your orders or 
                        <Link to="/UserReg"> <button className="btn btn-warning">Sign Up</button></Link> if 
                        you are not an  existing User</h1> </div> }
                    </div>
                
                
                </React.Fragment>
                
            )
        }


    } 
}

export default UserHoc;