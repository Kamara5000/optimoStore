import React, {Component} from "react";

function myHoc(IncomingComponent){
    return class extends Component{
        constructor(props){
            super(props);
        } 

        anything = "Ayo"
        render(){

            let check = JSON.parse(localStorage.getItem("log"));
            return(
                <React.Fragment>
                    THIS IS HOC PAGE
                    {check?
                <IncomingComponent {...this.props}  any={this.anything}  />: 
                <div><h1>Dear Admin Please Log in to View Your Dashboard</h1> </div> }
                
                </React.Fragment>
                
            )
        }


    } 
}

export default myHoc;