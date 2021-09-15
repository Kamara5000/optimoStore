import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {sub} from '../actions/index';
import {Link} from 'react-router-dom';
import UserHoc from '../userHoc';




const UserOrder=(props)=>{

        let [myOrders, handleMyOrders]= useState([]);
        let [total, handleTotal]= useState(0);
        
    // console.log(props)
     useEffect(()=>{
      
        let goods = JSON.parse(localStorage.getItem("order"));
        //handleMyOrders(goods);

        if (goods&&goods.length>0) {
            handleMyOrders(goods);
            let amount=0;

            for (let i = 0; i < goods.length; i++) {
                amount = amount+Number(goods[i].product_price * goods[i].count);
                
            }
            console.log(amount)
            handleTotal(amount);
        }
     },[]);
    

     let deliveryDate = new Date();
     deliveryDate.setDate(deliveryDate.getDate() + 7);   

     
       
    return(
    <React.Fragment>
    <div className="pl-5 pr-5 pb-5" style={{paddingTop:"10rem" , backgroundColor:  '#EAEDED'}}>
        <h3>YOUR ORDERS ARE HERE</h3>
        <h3>  Gurantee delivery date: <span className="font-weight-bold">{deliveryDate.toDateString()}</span></h3>
        <h5>Subtotal ({myOrders.length} item): ${total} </h5>
  
            <div className="card-deck mt-5 mb-5" >
                {myOrders  && myOrders.map((goods,i)=>(
               <div key={i}>
                    <div className="card mb-3" style={{maxWidth: 540+'px'}}>
                        <div className="row  no-gutters">
                        <div className="col-md-4">
                        <img src={`http://localhost/react/optimobackend/uploads/${goods.product_image_name}`}
                         className="card-img" alt="..."/>
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{goods.product_name}</h5>
                      <p className="card-text">{goods.product_details}</p>
                      <p className="card-text">${goods.product_price }</p>
                        <p className="card-text"><small className="text-muted"><span style={{fontWeight:"bolder"}} >Quantity</span>: {goods.count}</small></p>
                    </div>
                    <div>
    

                    </div>
                 </div>
                </div>
            </div>
               </div>
           ))}

           {myOrders.length<1 && <h2 className="mx-auto mb-5">Your have no order</h2>}
                        
            </div>
                
                        
         </div>
                    
        </React.Fragment>
    )
}

const mapStateToProps =state=>{
    return({
        myNum:state.num,
        myGoods: state.addToCart
    })
}

const addFunctionToRedux=dispatch=>{
    return {
       mySub: (price)=>dispatch(sub(price)),  
          }
}


export default connect(mapStateToProps, addFunctionToRedux) ( UserHoc(UserOrder));