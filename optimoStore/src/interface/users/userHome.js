import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {prod} from '../actions/addPro'
import {mycart} from '../actions/addPro'
import axios from 'axios'
import UserCart from './userCart';
import {add} from '../actions/index'

    
const UserHome=(props)=>{
  let [myProducts, handleMyProducts] = useState([]);
  let [show, setShow] = useState(false);
  let [cart, handleCart]=useState([]);
  let [total, handleTotal]= useState(0);
  let [state, setstate] = useState(1);
  let [filter, handleFilter] = useState();
  let [isLoading, handleLoading] = useState(false);
 
 //let [myVal, handleVal]=useState("ib")
  

    
  useEffect(()=>{

    //use the search if there is input in the search box
    if (filter) {
      handleLoading(true);

      axios.get('http://localhost/react/optimobackend/availableproduct.php').then(response=>{
      const query = filter.toLowerCase();
      const filteredGoods = response.data.filter(goods=>{
        const productName = `${goods.product_name}`;
        if(query.length === 1){
          const firstLetter = productName.charAt(0).toLowerCase();
          return firstLetter === query
        }else{
          return productName.toLowerCase().includes(query);
        }
      })
    
      handleMyProducts(filteredGoods);
      handleLoading(false);
    }).catch(err=>(console.log(err)))  
  } else {
     axios.get('http://localhost/react/optimobackend/availableproduct.php').then(response=>{
        //let products = response.data;
        console.log(response.data);
        handleMyProducts(response.data);
        handleLoading(false);
      }).catch(err=>(console.log(err))) 
       
    } 
    
    

},[filter]);



const handleClose = ()=>{
  setShow(false)
}

  const  handleAddToCart=(product,i)=>{
    let local = JSON.parse(localStorage.getItem("cart"));
    product.count=1;

    //checking if items are available in the localstorage and if the selected product is not there or not
      if (local) {
        let check =  local.filter((pro,i)=>pro.product_id == product.product_id);
        if (check.length>0) {
          document.getElementById("modalbtn").click()
        }else{
          props.myC(product);
        }
      }else{
        props.myC(product);
      }
      const price = Number(product.product_price);
      props.myTotal(price);
  }

   const handleGoToCart =()=>{

    console.log("my add to cart")
   // console.log(cart)
   console.log(cart)

  }

    return(
      <React.Fragment>
        <div className="p-5" style={{paddingTop:"100px",marginTop:'20px', backgroundColor:  '#EAEDED', width: '100%', height: '100%'}}>
          <form className="form-inline my-4 ">
              <input className="form-control mr-sm-2"  onChange={event => handleFilter(event.target.value)} type="search" placeholder="Search Product" aria-label="Search"/>
          </form>

          {isLoading && <p className="text-danger">Loading...<span className="fa fa-spinner fa-spin"></span></p>}
          {filter && myProducts.length < 1 && <p className="text-danger">Product not available</p>}
          <div className="card-deck justify-content-center" style={{}} >
            { myProducts.map((product,i)=>(
              <div key={i} >
                <div  className="card border-info mb-3" style={{width: '15rem', height: '21rem'}}>
                    <div style={{margin:'auto', marginTop:"1rem"}}>
                      <img style={{maxWidth: 10+'rem', height: 10+'rem'}}src={`http://localhost/react/optimobackend/uploads/${product.product_image_name}`} className="card-img-top" alt={product.product_name} />
                    </div>
                    <div className="card-body" style={{lineHeight:"0.5rem"}}>
                      <h5 className="card-text">{product.product_name}</h5>
                      <p className="card-text">price ${product.product_price}</p>
                      <p className="card-text">{product.product_available} available </p>
                    </div>
                    <div className="card-footer" >
                      <button className=" btn disabled  btn-sm btn-outline-primary" onClick={()=>handleAddToCart(product,i)} >Add to cart</button>
                    </div>
               </div>
              </div>               
            ))} 
          </div>
          
        </div>

 
 {/* modal to display if an item is already in the cart */}
  <button type="button" hidden={true} id="modalbtn" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
  </button>
  <div className="modal w-75" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        
        <div className="modal-body text-lg text-success">
           You already picked me, i'm resting in the cart<span className="fa fa-exclaim"></span>
        </div>
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
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
  

    















    

