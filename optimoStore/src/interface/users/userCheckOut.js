import React, {useState, useEffect} from 'react'

const UserCheckOut=(props)=>{
    
    let [total, handleTotal] = useState(0);
    let [name, changeName] = useState("AYO");
    let [myGoods, handleMygoods]= useState([]);

    const editName =()=>{
        changeName("Wumi")
    }

    useEffect(()=>{
        let goods = JSON.parse(localStorage.getItem("cart"));
        handleMygoods(goods);

        let amount=0;

        for (let i = 0; i < goods.length; i++) {
            amount = amount+Number(goods[i].product_price);
            
        }
        console.log(amount)
        handleTotal(amount);
       
    },[])



    return(
        <React.Fragment>
    <div class="page-header" style={{backgroundColor: '#F5F5F5'}} >
            <h1 style={{textAlign:'center'}} >Checkout (<a href=''>{myGoods.length} items</a>)</h1> <br/>

    </div>
        <div className="col-12">
            <div className="card" >
                
<div>
    <div className="row">
        <div className="col-md-8">
        <div>
1.  Shippping address
</div><br/><br/><br/>
<div>
2. Payment method<br/>
<input type="text" className="form-control w-25 "  placeholder="enter an amount" /><br/>
<button className="btn btn-primary btn-sm">Add to balance</button>
</div><br/><br/><br/>

<div>
<div>3. Review Item and Shippping </div>
<div>Gurantee delivery date: Nov, 30, 2020 if you order in the next 24 hours (<a href="">Details</a>) <br/>
items shipped from OptimoStore.com</div>

{myGoods.map((goods,i)=>(
   <div key={i}>
        <div className="card mb-3" style={{maxWidth: 540+'px'}}>
            <div className="row no-gutters">
            <div className="col-md-4">
            <img src={`http://localhost/react/optimobackend/uploads/${goods.product_image_name}`} className="card-img" alt="..."/>
            </div>
    <div className="col-md-8">
        <div className="card-body">
<h5 className="card-title  ">{goods.product_name}</h5>
            <p className="card-text">Part {i+1} of {myGoods.length} - {goods.product_name} </p>
            <p className="card-text">Service with OptimoStore</p>
            <p className="card-text r"><span className="text-danger" >Bundle total : ${total}</span> item {i+1} of {myGoods.length} </p>
            <p className="card-text">Sold by: OptimoStore</p>
            <p className="card-text"><span style={{fontWeight:"bolder"}} >Quantity</span>: 1</p>
            <p className="card-text"><small className="text-muted">Gift option not available</small></p>
        </div>

     </div>
    </div>
</div>
   </div>
))}

            <div className="card mb-3" style={{maxWidth: 540+'px'}}>
                    <div className="row no-gutters">
                         <div className="col-md-4 m-4">
                            <button className="btn btn-warning">Place your order</button>
                                
                        </div>
                    <div className="col-md-6">
                        <h5 className="card-title text-danger ">Order total : ${total}</h5>
                            <p className="card-text"><small>By placing your order you agree OptimoStore's
                    <a href="">policy</a> and <a href="">condition of use</a></small> </p>
                        
                </div>
                </div>
                </div>
            </div>
        </div>
       
       
        <div className="col-4">
            
        <div className="card" style={{maxWidth: 20+'rem'}} >
            <div className="card-header bg-transparent border-success">
            <button className="btn btn-sm btn-warning w-100 " >place your order</button>
            <p className="card-text " style={{textAlign:"center"}}><small>By placing your order you agree OptimoStore's <br/>
            <a href="">policy</a> and <a href="">condition of use</a></small> </p>
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

        </div>
    </div>

</div>
                    </div>

                </div>
        
             
        </React.Fragment>
    )
}
export default UserCheckOut;