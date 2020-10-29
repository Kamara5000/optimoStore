import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {prod} from '../actions/addPro'
import {mycart} from '../actions/addPro'
import axios from 'axios'
import UserCart from './userCart';
import {add} from '../actions/index'

    
const UserHome=(props)=>{
  let [myProducts, handleMyProducts] = useState([]);

  let [cart, handleCart]=useState([]);
  let [total, handleTotal]= useState(0)

  //let [myVal, handleVal]=useState("ib")
  






  
    
  useEffect(()=>{
    console.log("hello");
    axios.get('http://localhost/react/optimobackend/availableproduct.php')
    .then(response=>{
        //let products = response.data;
        console.log(response.data);

        handleMyProducts(response.data);
    })

    .catch(err=>(console.log(err)))

    
},[]

);


  const  handleAddToCart=(product,i)=>{
    //alert(i);
    //let myCart= myProducts.filter((products,index)=>index === i);
    //let mycar =[...cart,myCart]
    //handleCart([...cart].concat(myCart))
    //handleCart([...cart,product])
    //const price = Number(product.product_price)
    //handleTotal(total+price);
    //document.getElementById("check").hidden=false;
    props.myC(product);
      const price = Number(product.product_price);
      props.myTotal(price)  

  }

   const handleGoToCart =()=>{

    console.log("my add to cart")
   // console.log(cart)
   console.log(cart)

  }

        return(
            <React.Fragment>
             <div className="card-deck" >
                   { myProducts.map((product,i)=>(
                       <div key={i} >
                           <div className="card border-info mb-3  ">
                        <img src={`http://localhost/react/optimobackend/uploads/${product.product_image_name}`} className="card-img-top" alt={product.product_name} />
                         <div className="card-body">
                         <h5 className="card-title">{product.product_name}</h5>
                          <p className="card-text">price ${product.product_price}</p>
                          <h6 className="card-text">{product.product_available} available </h6>
                          </div>
                            <div className="card-footer" >
                              <button className=" btn  btn-sm btn-outline-primary"
                               onClick={()=>handleAddToCart(product,i)} >Add to cart</button></div>
                         </div>
                        </div>               
                   ))} 
                </div>
        
                
               </React.Fragment>
        )
    }

    
    
    
    const mapStateToProps =state=>{
      return({
          //myNum:state.num,
          myGoods: state.addProduct
      })
  }
  
  const addFunctionToRedux=dispatch=>{
      return {
         // mySubtraction: ()=>dispatch(sub()),
          myTotal: (price)=>dispatch(add(price)),
         // myMul: ()=>dispatch(multi()),
          myC: (product)=>dispatch(mycart(product))
            }
  }
  
  export default connect(mapStateToProps, addFunctionToRedux)(UserHome);
  

    















    

