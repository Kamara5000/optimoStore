import React from 'react';

//import shoe1 from './image/shoe1.jpg'


    const myImages=()=>{

        return(
            <React.Fragment>

            <div className="card" style={{width:'20%', height:'40%' }} >
           {/* <img className="card-img-top" src={shoe1} style={{height:'20%'}} alt="shoe1" /> */}
            <div className="card-body">
            <h5 className="card-title">Shoe</h5>
             <p className="card-text">price $45</p>
            <button className=" btn btn-sm btn-primary" >Add to cart</button> 
            </div>
             </div>    
            
            </React.Fragment>
                    )

    }

    export default myImages;