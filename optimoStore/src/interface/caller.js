import React, {Component} from 'react';
import myHoc from "./hoc";
class Caller extends Component{
    state = {
        
     }

     

    render() {

        let {myName} = this.props;
        return (
             
             <React.Fragment>
             {console.log(this.props)};


                 <div>YOu are welcome to caller page</div> 

             </React.Fragment>
        );
    }
}

export default myHoc(Caller);