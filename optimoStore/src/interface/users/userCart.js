import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {mycart,mydel} from '../actions/addPro';
import {sub} from '../actions/index'



const UserCart=(props)=>{

        //let [myCarted, handleMycarted]= useState(props.myGoods);
        let [total, handleTotal]= useState(props.myNum);

    // console.log(props)
     useEffect(()=>{
      

        if(props.myNum>0){ 
            document.getElementById("check").hidden=false;
            document.getElementById("del").hidden=false;
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
       // console.log(total)
     }
   
       
    return(
        <React.Fragment>
                    <h3>YOUR CARTED GOOD ARE HERE</h3>
                   <h5>Subtotal ({props.myGoods.length} item): ${props.myNum} </h5>
                
                      <div className="card-deck" >
                      
                      {props.myGoods.map((product,i)=>(

                       
                      <div key={i} >
                         
                       <div className="card border-info mb-3  ">
                       <img src={`http://localhost/react/optimobackend/uploads/${product.product_image_name}`} className="card-img-top" alt={product.product_name} />
                        <div className="card-body">
                        <h5 className="card-title">{product.product_name}</h5>
                         <p className="card-text">price ${product.product_price}</p>
                         
                         </div>
                         <div className="card-footer" >
                              <button className=" btn  btn-sm btn-outline-danger"
                               onClick={()=>handleDelCart(product,i)} >Delete</button></div>
                              

                               
                        </div>
                       </div>    
                       ))} 
                        
                             </div>
                             <div hidden={true}  id="del"><button className="btn btn-sm btn-outline-success" 
                             onClick={handleDelCarted} >Delete Cart</button></div>
  
                             <div hidden={true}  id="check"><button className="btn btn-sm btn-outline-success">check Out</button></div>
  
                    
                        
           
                    
        
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

