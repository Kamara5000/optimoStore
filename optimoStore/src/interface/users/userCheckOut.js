import React, {useState, useEffect} from 'react';
import UserHoc from './userHoc';
import { Link, useHistory } from 'react-router-dom';
import {clear} from '../actions/addPro';
import {connect} from 'react-redux';

const UserCheckOut=(props)=>{
    
    let [total, handleTotal] = useState(0);
    let [myGoods, handleMygoods]= useState([]);
    let [users, handleUsers]= useState({});
    let [amountPaid, handleAmount]= useState(0);
    let [balance , handleBalance] = useState(0);
    let [low, handleLow] = useState(false);
    let [success, handleSucess] = useState(false);

    const history = useHistory();
    

    useEffect(()=>{
        let goods = JSON.parse(localStorage.getItem("cart"));
        let myUser = JSON.parse(localStorage.getItem('user'));
        console.log(myUser.user_address);
        console.log(goods);
        handleMygoods(goods);
        handleUsers(myUser);

        let amount=0;

        if (goods && goods.length > 0) {
            for (let i = 0; i < goods.length; i++) {
                amount = amount+Number(goods[i].product_price * goods[i].count);
                
            }
            console.log(amount)
            handleTotal(amount);
        }

       
    },[])

    let deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);       
    // console.log(deliveryDate)

    const placeOrder=()=>{
        if(Number(balance)<Number(total)){
            handleLow(true)
        }else{
            handleBalance(Number(balance) - Number(total))
            handleLow(false);
            handleSucess(true);
            localStorage.setItem("order",JSON.stringify(myGoods));
            props.clearCart();
        }

     }

   

return(
<React.Fragment>
           
<div className="container-fluid">
    <div className="row p-md-5 p-3" style={{ backgroundColor:  '#F5F5F5'}}>
        
        <div className="col-12 font-weight-bold text-center" ><h1 style={{marginTop:"5rem"}} >Checkout (<u>{myGoods.length}items</u>)</h1>
        </div>
        
        <div className="col-md-8 mt-5">
                <div>
                <span className="text-success">1.  Shippping address</span><br/>
                    {users.user_address}
                </div>
                <div className="mt-3">
                <span className="text-success">2. Payment method</span>
                  <input type="text" onChange={(event)=>handleAmount(event.target.value)} name="balance" className="form-control w-50 "  placeholder="enter an amount" />
                </div>
                
                <div className="d-flex mt-3">
                    <div><button onClick={()=>handleBalance(Number(balance)+Number(amountPaid)) } className="btn btn-primary btn-sm ">Add to balance</button></div>
                   <div className=" font-weight-bold ml-5">Balance<h1 className="">${balance}</h1></div>
                </div>

               <div className="mt-3">
                  <div><span className="text-success">3. Review Item and Shippping</span><br/>
                   Gurantee delivery date: <span className="font-weight-bold">{deliveryDate.toDateString()}</span> if you order in the next 24 hours (<a href="">Details</a>) <br/>
                         items shipped from <span className="font-weight-bold">OptimoStore.com</span>
                  </div>

                {myGoods && myGoods.map((goods,i)=>(
                  <div key={i}>
                    <div className="card mb-3 mt-3 p-2" style={{maxWidth: 540+'px'}}>
                        <div className="row no-gutters">
                                  <div className="col-md-4">
                                    <img src={`http://localhost/react/optimobackend/uploads/${goods.product_image_name}`} className="card-img" alt="..."/>
                                  </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title  ">{goods.product_name}</h5>
                                         <p className="card-text">Part {i+1} of {myGoods.length} - {goods.product_name} </p>
                                         <p className="card-text">Service with OptimoStore</p>
                                         <p className="card-text"><span style={{fontWeight:"bolder"}} >Quantity</span>: {goods.count}</p>
                                         <p className="card-text r"><span className="text-danger" >Bundle total : ${Number(goods.product_price*goods.count)}</span> item {i+1} of {myGoods.length} </p>
                                         <p className="card-text">Sold by: OptimoStore</p>
                                         <p className="card-text"><small className="text-muted">Gift option not available</small></p>
                                </div>
                            </div>
                        </div>
                   </div>
                  </div>
                ))}
            </div>
        </div>
       
        <div className="col-sm-4  mt-5">
            {success && <p className="text-success">Your Order is Placed successfully!!! <Link to="/UserOrder">Go to Order</Link></p>}
          {!success && myGoods && <div className="card" style={{maxWidth: '20rem'}} >
             <div className="card-header bg-transparent border-success">
                 {low && <p className="text-danger text-center">your balance is low add to balance and try again</p>}
               <button onClick={placeOrder} className="btn btn-sm btn-warning w-100 " >place your order</button>
               <p className="card-text " style={{textAlign:"center"}}>
                   <small>By placing your order you agree OptimoStore's <br/>
                  <a href="">policy</a> and <a href="">condition of use</a>
                  </small> 
                </p>
              </div>
            
            <div className="card-body text-success">
                <h5 className="card-title">Order Summary</h5>
                     <p className="card-text">Items({myGoods.length}): <span style={{float: 'right'}}>${total}</span></p>
                     <p className="card-text">Shipping & handling: <span style={{float: 'right'}}>${0.00}</span></p>
                     <p className="card-text">Total before tax: <span style={{float: 'right'}}>${total}</span></p>
                     <p className="card-text">Estimated tax to be collected: <span style={{float: 'right'}}>${0.00}</span></p>
             </div >
             
             <div className="card-body text-danger">
                    <h5 className="card-title">Order total <span style={{float: 'right'}}>${total}</span> </h5>
             </div>
                <div className="card-footer bg-light border-success">
                     <p className="card-text"><small><a href="">How are shipping costs calculated?</a></small></p>
                     <p className="card-text"><small>Prime shipping benefits have been applied to your order</small></p>
                </div>
            
          </div>
            }

        </div>
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
        clearCart: ()=>dispatch(clear())
          }
}
export default connect(mapStateToProps, addFunctionToRedux)(UserHoc(UserCheckOut));