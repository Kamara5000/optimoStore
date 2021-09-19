import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AdminNavBar from './adminNavBar';
import adminHoc from './adminHoc';
import { useHistory } from 'react-router';

const AdminDash=(props)=>{
   //console.log(props) 
   let [productName,setName] = useState("");
   let [productNum,setNum] = useState("");
   let [productPrice,setPrice] = useState("");
   let [productDetails,setDetails] = useState("");
   let [productPic,setP] = useState("");
   let [pImg, setImg] = useState("");
   let [empty, setEmpty] = useState(false);
  

   const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if (productName === "" || productNum === "" || productPrice === "" || productDetails === "" || productPic === "" ) {
          return setEmpty(true);
      }

        let m = new FormData();
        m.append("pic",productPic);
        m.append("product_name",productName);
        m.append("product_details",productDetails);
        m.append("product_price",productPrice);
        m.append("no_available",productNum);
         
            console.log(m)
     //axios.post('//localhost:80/react/optimoBackend/adminpost.php',m)
        axios({
        method: "post",
        url: "//localhost:80/react/optimobackend/adminpost.php",
        data: m

    ,
        headers: { 
            'Content-Type': 'multipart/form-data'
         }, })
    
    .then(response=>{console.log(response.data);
      
      if (response.data == "success") {
        history.push("/admin/home")
      }else{
        console.log('error');
      }
      
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
          let n = event.target.value
         setName(n);
    }
  
    else if (numb) {
         setNum(event.target.value);
    }
    else if (details) {
        setDetails(event.target.value);
   }
    else if(pri) {
         setPrice(event.target.value);
    }
    else if (pic) {
      let img = event.target.files[0];
        if (img) {
          setP(img);
          setImg(URL.createObjectURL(img))
        }
    }
}
    return(
    <React.Fragment>
    <div className="row p-sm-5 mx-sm-5" style={{backgroundColor:  '#EAEDED'}}>
    <h1 className="col-sm-12 text-center mb-4">ADD PRODUCTS</h1>
       <div className="col-sm">          
          <h3>You can Add your Available Products here</h3>
          
      <form>
        {empty && <p className="text-danger text-center">All field required</p>}
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
        {pImg && <img style={{maxWidth: 5+'rem', height: 5+'rem'}}src={pImg}  alt={pImg}/>}
      <input type="file" name="pic" className="form-control" onChange={handleSet}/>
      </div>
      <button type="submit"  className="btn btn-primary" onClick={handleSubmit} >Submit</button>
    </form>
    </div>

 </div>
        
    
        </React.Fragment>
    )
}
export default adminHoc(AdminDash);