import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {prod} from '../actions/addPro'


const AdminDashBoard=(props)=>{

    let x,k,y;
    let m ={x,k,y}
    
   let  {myGoods}=props;


    let [myVal, handleMyVal] = useState(3);
    let [name, changeName] = useState("AYO");
   
    let [pro, handleProduct]= useState({img:"", name:"", price:"",noAv:""})
    console.log(pro)
    
    const editName =()=>{
        changeName("Wumi")
    }

    const clickMe=()=>{
        handleMyVal(myVal+1)
    }
    
    useEffect(()=>{
        console.log("hello");
    }, [myVal]

    )
  
    const addProduct=(x,y,k)=>{
     console.log(x)
            console.log(x)
            console.log(y)
            console.log(k)
        props.myPusher(x);
        
        console.log(x)
        }


   const handleSet=(event)=>{
        let check= event.target.name==="amount";
        let ava= event.target.name==="noAvailable";
        let product= event.target.name==="product";
        if (check) {
             x= (event.target.value);
           // handleProduct({...pro,price:x})
          console.log(x)  
        }

        else if (ava) {
             k = (event.target.value);
           // handleProduct({...pro,noAv:k})
            console.log(k)
        }

        else if(product) {
             y = (event.target.value);
            //handleProduct({...pro,name:y})
            console.log(y)
  
        }
    
    
    }
  
   
    //console.log(props)
    return(
        <React.Fragment>
                   

                   
                                         
        <h5>THIS IS THE ADMIN DASHBOARD</h5>
        <h3>You can Add your Available Products here</h3>
        
<div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" >Product Name</span>
  </div>
  <input type="text" name="product" onChange={handleSet} className="form-control" placeholder="Product Nname" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <input type="number" name="noAvailable" onChange={handleSet} className="form-control" placeholder="Number Available" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <span className="input-group-text" id="basic-addon2">item</span>
  </div>
</div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">$</span>
  </div>
  <input type="number" name="amount" onChange={handleSet} className="form-control" aria-label="Amount (to the nearest dollar)"/>
  <div className="input-group-append">
    <span className="input-group-text">.00</span>
  </div>
</div>

<div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text">Product Details</span>
  </div>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>

<div className="input-group mb-3">
  <div className="custom-file">
    <input type="file"  id="inputGroupFile02"/>
    <label className="custom-file-label" /*for="inputGroupFile02"*/ aria-describedby="inputGroupFileAddon02">Choose file</label>
  </div>
  <div className="input-group-append">
    <button className="btn btn-dark" >upload</button>
  </div>
</div>

<div> 
    <input type="file" />
</div>

<button className="btn btn-dark" onClick={()=>addProduct({x,y,k})} >Add Product</button>

</div>
          <br/>
    
           
             i have {myVal} balls 
             my nam is {name}
             <button onClick={clickMe} >increase</button>
             <button onClick={editName} >name</button>
            
             our product is {pro.myproduct} the amount is {pro.mount}, we have {pro.noAv} Available,
             {/* {myGoods.map((myGoods,i)=>(
                       <div key={i} >
                       
                        {myGoods.name}

                       </div>
                           
            
             ))}
              */}

                    { myGoods.map((mypic,i)=>(
                       <div key={i} >
                           
                        <div className="card border-info mb-3  ">
                        <img src={mypic.img} className="card-img-top" alt="card image cap" />
                         <div className="card-body">
                         <h5 className="card-title">{mypic.name}</h5>
                          <p className="card-text">price {mypic.price}</p>
                          </div>
                            <div className="card-footer" ><button className=" btn btn-sm btn-primary" >Add to cart</button></div>  
                         </div>
                        </div>    
           

                       
                     
                       
                   ))} 
                  

             

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
       // myAddition: ()=>dispatch(add(1)),
       // myMul: ()=>dispatch(multi()),
        myPusher: (x)=>dispatch(prod(x))
          }
}

export default connect(mapStateToProps, addFunctionToRedux)(AdminDashBoard);
