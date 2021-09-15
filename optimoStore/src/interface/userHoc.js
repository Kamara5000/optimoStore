import React, {Component} from "react";
import {Link} from 'react-router-dom';

function UserHoc(IncomingComponent){
    return class extends Component{
        constructor(props){
            super(props);
        } 

        anything = "Ayo"
        render(){

            let check = JSON.parse(localStorage.getItem("userLog"));
            return(
                <React.Fragment>
                    <div>
                    {check?
                     <IncomingComponent {...this.props}  any={this.anything}  />: 
                    <div><h1>Please log in to proceed to check out and your orders or Register if 
                    you are not an Already existing User <div><Link to="/UserReg">
                    <button className="btn btn-warning">Log In</button></Link></div></h1> </div> }
                    </div>
                
                
                </React.Fragment>
                
            )
        }


    } 
}

export default UserHoc;