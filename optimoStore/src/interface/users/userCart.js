import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {add,minus,mycart,mydel} from '../actions/addPro';
import {sub} from '../actions/index';
import {Link} from 'react-router-dom';




const UserCart=(props)=>{

        let [myCarted, handleMycarted]= useState([]);
        let [total, handleTotal]= useState(0);

    // console.log(props)
     useEffect(()=>{
      
        let goods = JSON.parse(localStorage.getItem("cart"));
       // handleMycarted(goods);

        if (goods&&goods.length>0) {
            handleMycarted(goods);
            let amount=0;

            for (let i = 0; i < goods.length; i++) {
                amount = amount+Number(goods[i].product_price * goods[i].count);
                
            }
            console.log(amount)
            handleTotal(amount);
        }
     },[total]
    
     );
    


    const handleAdd = (product)=>{
        props.myAddition(product);
    
        let goods = JSON.parse(localStorage.getItem("cart"));
        handleMycarted(goods);
        const price = Number(product.product_price * product.count);
        handleTotal(total-price);
    }

    const handleDecrease = (product,i)=>{
        const price = Number(product.product_price * product.count);
        if (product.count === 1) {
            props.delCart(product.product_id);
            let goods = JSON.parse(localStorage.getItem("cart"));
            handleMycarted(goods);
            handleTotal(0);
        } else {
            props.myDecrement(product);
            let goods = JSON.parse(localStorage.getItem("cart"));
            handleMycarted(goods);
        }

        handleTotal(total-price);
    }

    const handleDelCart=(product,i)=>{

        //let delCart=myCarted.filter((product,index)=>index !=i);
        const price = Number(product.product_price * product.count);
        //props.delCart(i);
        props.delCart(product.product_id);
        let goods = JSON.parse(localStorage.getItem("cart"));
        handleMycarted(goods);
        //handleMycarted(delCart);
        handleTotal(total-price); 
        
        console.log(total, myCarted)
     }

     
       
    return(
    <React.Fragment>
    <div className="pl-5 pr-5 pb-5" style={{paddingTop:"10rem" , backgroundColor:  '#EAEDED'}}>
        <div className="d-flex">
           <h3>YOUR CARTED GOOD ARE HERE</h3>
            {myCarted && myCarted.length>0 && <div  className="ml-auto">
                    <Link to="/UserCheckOut" >
                        <button className="btn btn-sm btn-outline-success">Proceed to checkout</button>
                    </Link>
            </div>
            }
  
                
        </div>
        <h5>Subtotal ({myCarted.length} item): ${total} </h5>
  
            <div className="card-deck mt-5 mb-5" >
                {myCarted.map((goods,i)=>(
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
                        <div className="card-footer bg-transparent" >
                              <button className=" btn  btn-sm btn-outline-primary"
                               onClick={()=>handleDelCart(goods,i)} >Delete
                               </button>
                               <div style={{float:'right'}} >
                                   <span> <button onClick={()=>handleAdd(goods,i)} className="btn btn-sm btn-success">+</button></span>
                                  <span><button onClick={()=>handleDecrease(goods,i)} className="btn btn-sm btn-danger ml-2">-</button></span>
                                </div>
                        </div>

                    </div>
                 </div>
                </div>
            </div>
               </div>
           ))}

           {myCarted.length<1 && <h2 className="mx-auto mb-5">Your shopping cart is empty</h2>}
                        
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
        
       myAddition: (product)=>dispatch(add(product)),
       myDecrement: (product)=>dispatch(minus(product)),
        delCart: (i)=>dispatch(mydel(i))
          }
}


export default connect(mapStateToProps, addFunctionToRedux)(UserCart);