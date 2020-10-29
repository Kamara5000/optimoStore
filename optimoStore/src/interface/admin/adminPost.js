import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
const AdminPost=(props)=>{
    
    let [myVal, handleMyVal] = useState(3);
    let [name, changeName] = useState("AYO");

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
    
    console.log(props)
    return(
        <React.Fragment>
            <div className="card-deck" >
                   { props.myGoods.map((mypic,i)=>(
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
                       
                       </div>
  
            this is the Admin Admin post <br/>
            
             i have {myVal} balls 
             my nam is {name}
             <button onClick={clickMe} >increase</button>
             <button onClick={editName} >name</button>
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
       // myPusher: (x)=>dispatch(prod(x))
          }
}

export default connect(mapStateToProps, addFunctionToRedux)(AdminPost);
