import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
import { useHistory } from 'react-router';

    
const AdminPost=(props)=>{
  let [myProducts, handleMyProducts] = useState([]);
  let [reload, setReload] = useState(false);
  let [filter, handleFilter] = useState();
  let [isLoading, handleLoading] = useState(false);
  let [editProduct, setEditProduct]= useState();
  let [productName,setName] = useState("");
  let [productNum,setNum] = useState("");
  let [productPrice,setPrice] = useState("");
  let [productDetails,setDetails] = useState("");
  let [productPic,setP] = useState("");
  let [editUrl, setUrl] = useState("")
 
const history = useHistory();

    
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
        console.log(response.data);
        handleMyProducts(response.data);
        handleLoading(false);
      }).catch(err=>(console.log(err))) 
       
    } 
},[filter, reload]);

const handleDelete = (product,i)=>{
    let m = new FormData();
    m.append("id",product.product_id);
    axios.post('http://localhost/react/optimobackend/deleteProduct.php',m).then(response=>{
        console.log(response)

        if(response.data === "success"){
          setReload(!reload)
        }
    }).catch(err=>(console.log(err)))  
}

const handleEdit=(product,i)=>{
    setEditProduct(product);
    setName(product.product_name);
    setNum(product.product_available);
    setDetails(product.product_details);
    setPrice(product.product_price);
}

const handleSubmit=(e)=>{
  e.preventDefault();
  
        let m = new FormData();
      m.append("pic",productPic);
      m.append("product_name",productName);
      m.append("product_details",productDetails);
      m.append("product_price",productPrice);
      m.append("no_available",productNum);
      m.append("id",editProduct.product_id);
      
      //console.log(m)
  axios({
  method: "post",
  url: "//localhost:80/react/optimobackend/editProduct.php",
  data: m
,
  headers: { 
      'Content-Type': 'multipart/form-data'
   }, })

.then(response=>{console.log(response.data); 
  if (response.data === "success") {
    document.getElementById("closemodalbtn").click();
    setReload(!reload)
    setUrl("");
    setP("");
  }else{
    console.log("error")
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
    setUrl(URL.createObjectURL(img))
  }
  
}
}

return(
<React.Fragment>
    <div className="row">
         <div className="col-sm">
        <div className="p-5" style={{paddingTop:"", backgroundColor:  '#EAEDED', width: '100%', height: '100%'}}>
        <h1 className="text-center">Your Posted Products</h1>
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
                    <div className="card-footer d-flex" >
                      <button className=" btn   btn-sm btn-outline-danger" onClick={()=>handleDelete(product,i)} >Delete</button>
                        <button type="button" onClick={()=>handleEdit(product)}  id="modalbtn" className="btn ml-auto  btn-sm btn-outline-dark" data-toggle="modal" data-target="#myModal">
                        Edit
                       </button>
                    </div>
               </div>
              </div>               
            ))} 
          </div>
          
        </div>

        </div>
          </div>

        {/* Edit product modal */}
        {editProduct && 
        <div>
          <button type="button" hidden={true} id="modalbtn" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          </button>
          <div className="modal w-100" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                
                <div className="modal-body text-lg text-success">
                <div className="row p-5" style={{marginTop:"",backgroundColor:  '#EAEDED'}}>
               <div className="col-sm">          
                  <h5>Edit PRODUCT</h5>
                
              <form>
              <div className="form-group">
              <label>Edit Product Name</label>
              <input type="text" value={productName} name="product" id="product" className="form-control" onChange={handleSet} />
              </div>
                <div className="form-group">
              <label >Edit Product Price</label>
              <input type="text" value={productPrice} name="price" className="form-control" onChange={handleSet} />
              </div>
              <div className="form-group">
              <label >Edit Product details</label>
              <textarea type="text" value={productDetails} name="details" className="form-control" onChange={handleSet} />
              </div>
                <div className="form-group">
                <label >Edit Number Available</label>
              <input type="number" value={productNum} name="num" className="form-control" onChange={handleSet}/>
              </div>
              <div className="form-group">
                <label >Change Product Image</label>
                {!editUrl && <img style={{maxWidth: 5+'rem', height: 5+'rem'}}src={`http://localhost/react/optimobackend/uploads/${editProduct.product_image_name}`}  alt={editProduct.product_name}/>}
                {editUrl && <img style={{maxWidth: 5+'rem', height: 5+'rem'}}src={editUrl}  alt={editProduct.product_name}/>}
                <input type="file"  name="pic" className="form-control" onChange={handleSet}/>
              </div>
              <button type="submit"  className="btn btn-primary" onClick={handleSubmit} >Submit</button>
            </form>
            </div>
        
         </div>
                </div>
                
                <div className="modal-footer">
                  <button type="button" id="closemodalbtn" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                              </div>
            </div>
          </div>

          </div>
        }
</React.Fragment>
)

}
    
    
    
    const mapStateToProps =state=>{
      return({
         
         //myGoods: state.addProduct
      })
  }
  
  const addFunctionToRedux=dispatch=>{
      return {

            }
  }
  
  export default connect(mapStateToProps, addFunctionToRedux)(AdminPost);
  

    















    

