import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AdminNavBar from './adminNavBar';
import myHoc from '../hoc'

const AdminDash=(props)=>{
   console.log(props) 
    // let [proAvailable, handleProAvailable] = useState(0);
    // let [proName, handleProName] = useState("");
    // let [proPrice, handleProPrice] = useState(0);
    // let [proDetails, handleProDetails]= useState("");
    // let [proPic, handleProPic]= useState();

    let x,k,y,z,p;

    
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
              let m = new FormData();
            m.append("pic",p);
            m.append("product_name",x);
            m.append("product_details",z);
            m.append("product_price",y);
            m.append("no_available",k);
            
            console.log(m)
     //axios.post('//localhost:80/react/optimoBackend/adminpost.php',m)
        axios({
        method: "post",
        url: "//localhost:80/react/optimobackend/adminpost.php",
        data: m
       // {
         // name:y,
          //price:x,
          //available:k}
    ,
        headers: { 
            'Content-Type': 'multipart/form-data'
         }, })
    
    .then(response=>{console.log(response.data); 
      
    }
    )
    .catch(err=>console.log(err));

        
   
};
    
   const handleSet=(event)=>{
        let check= event.target.name==="product";
        let numb= event.target.name==="num";
        let pri= event.target.name==="price";
        let details = event.target.name==="details";
        let pic = event.target.name==="pic";
        if (check) {
             x= (event.target.value);
            //handleProName(x);
          //console.log(x)  
        }

        else if (numb) {
             k = (event.target.value);
        
            // handleProAvailable(k)
            //console.log(proName)
        }
        else if (details) {
            z = (event.target.value);
           //handleProDetails(z)
           //console.log(z)
       }


        else if(pri) {
             y = (event.target.value);

           // handleProPrice(y);
           // console.log(y)
        }
    else if (pic) {
        p = (event.target.files[0]);
        //handleProPic(p)
    }
    }
    return(
        <React.Fragment>
        
            <h5>ADD PRODUCTS</h5>
        <h3>You can Add your Available Products here</h3>
        
       <form>
    <div className="form-group">
    <label>Product Name</label>
    <input type="text" name="product" id="product" className="form-control" onChange={handleSet} />
    <small className="form-text text-muted">Enter your product name</small>
    </div>
     <div className="form-group">
    <label >Product Price</label>
    <input type="text" name="price" className="form-control" onChange={handleSet} />
  </div>
  <div className="form-group">
    <label >Product details</label>
    <input type="text" name="details" className="form-control" onChange={handleSet} />
  </div>
     <div className="form-group">
     <label >Number Available</label>
    <input type="number" name="num" className="form-control" onChange={handleSet}/>
    </div>
    <div className="form-group">
     <label >Upload Product Image</label>
    <input type="file" name="pic" className="form-control" onChange={handleSet}/>
    </div>
    <button type="submit"  className="btn btn-primary" onClick={handleSubmit} >Submit</button>
    </form>

    
        </React.Fragment>
    )
}
export default myHoc(AdminDash);