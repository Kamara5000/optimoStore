import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {mycart,mydel} from '../actions/addPro';
import {sub} from '../actions/index';
import {Link} from 'react-router-dom';




const UserCart=(props)=>{

        let [myCarted, handleMycarted]= useState(["ad"]);
        let [total, handleTotal]= useState(0);

    // console.log(props)
     useEffect(()=>{
      
        let goods = JSON.parse(localStorage.getItem("cart"));
       // handleMycarted(goods);

        if (goods&&goods.length>0) {
            handleMycarted(goods);

                document.getElementById("check").hidden=false;
                document.getElementById("del").hidden=false;    
            let amount=0;

            for (let i = 0; i < goods.length; i++) {
                amount = amount+Number(goods[i].product_price);
                
            }
            console.log(amount)
            handleTotal(amount);
       
        }

        else if(goods&&goods.length==0) { 
            document.getElementById("check").hidden=true;
            document.getElementById("del").hidden=true; 
            handleMycarted([])   
        }else if(!goods){
            document.getElementById("check").hidden=true;
            document.getElementById("del").hidden=true; 
            handleMycarted([])
        }
        
        
       

     },[total]
    
     );
    

    const handleDelCart=(product,i)=>{

        //let delCart=myCarted.filter((product,index)=>index !=i);
        const price = Number(product.product_price);
        props.mySub(price);
        props.delCart(i);
        //handleMycarted(delCart);
        
        handleTotal(total-price);

        
       
     }

     const handleDelCarted=()=>{
        //handleMycarted([])
       // handleTotal(0)

       localStorage.removeItem("cart");
       handleMycarted([]);
       handleTotal(0)
        console.log(total)
     }
   
       
    return(
        <React.Fragment>

                    <h3>YOUR CARTED GOOD ARE HERE</h3>
                   <h5>Subtotal ({myCarted.length} item): ${total} </h5>
                
                      <div className="card-deck" >
                      
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
                        <p className="card-text"><small className="text-muted">In Stock</small></p>
                    </div>
                    <div>
                    <div className="card-footer bg-transparent" >
                              <button className=" btn  btn-sm btn-outline-primary"
                               onClick={()=>handleDelCart(goods,i)} >Delete</button></div>
                         </div>
                 </div>
                </div>
            </div>
               </div>
           ))}
                        
                             </div>
                             <div hidden={true}  id="del" onClick={handleDelCarted} ><button className="btn btn-sm btn-outline-success" 
                             onClick={handleDelCarted} >Delete Cart</button></div>
  
                             <div hidden={true}  id="check">
                                <Link to="/UserCheckOut" >
                                   <button className="btn btn-sm btn-outline-success">Proceed to checkout</button>
                                </Link>
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
     //  myAddition: ()=>dispatch(add(1)),
       //myMul: ()=>dispatch(multi()),
        delCart: (i)=>dispatch(mydel(i))
          }
}


export default connect(mapStateToProps, addFunctionToRedux)(UserCart);

//import myHoc from "./hoc";

    // class UserCart extends Component{
    //     state = { }
        
    //     render(){
    //         //let bb = "working the network";
    //         //let {onNet,any} = this.props;
    //         console.log(this.props)
    //         return(
    //             <React.Fragment>

    //                 i have {this.props.mya}

    //             </React.Fragment>
    //         );

    //     }

    // }

    //     export default (UserCart)

