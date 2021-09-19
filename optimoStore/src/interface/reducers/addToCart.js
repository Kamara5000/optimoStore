  
    
const addToCart = (state=[], action)=>{
    
    if(action.type==="CART"){
        //let a = event.target.value;
        
          // console.log(k) ;
        
            // k = [...k,action.payload];
              //  console.log('this is the x'+action.payload.x)
            // k = [...k,{img:"image/shoe1.jpg", name:" Ghanaian Bag", price:"$100" }]
        console.log("redux")
        console.log(action.payload)

         // let myObj = { img:"image/shoe1.jpg", name:action.payload.y, price:action.payload.x };
            // m = [...k,myObj]
         
          //console.log(k)

         let  j = [...state,action.payload];
         let product = action.payload;
         let local = JSON.parse(localStorage.getItem("cart"));
         
         if (local) {
           local = [...local,product];
            //console.log(local)
           localStorage.setItem("cart",JSON.stringify(local));
         }else{
           localStorage.setItem("cart",JSON.stringify(j));
         }

        return j ;
        
    }else if (action.type==="PLUS") {
      
        let  j = [...state,action.payload];
         let product = action.payload;
         let local = JSON.parse(localStorage.getItem("cart"));
         
            let check =  local.filter((pro,i)=>pro.product_id === product.product_id);

            if (check.length>0) {
              local.map((pro,i)=>pro.product_id === product.product_id? pro.count = pro.count+1 : pro);
            }else{
              local = [...local,product];
            }
            
            //console.log(local)
            //console.log(check);
           
           localStorage.setItem("cart",JSON.stringify(local));

           return j;


}else if (action.type==="MINUS") {
      
  let  j = [...state,action.payload];
   let product = action.payload;
   let local = JSON.parse(localStorage.getItem("cart"));
   
      let check =  local.filter((pro,i)=>pro.product_id === product.product_id);

      if (check.length>0) {
        local.map((pro,i)=>pro.product_id === product.product_id? pro.count = pro.count-1 : pro);
      }else{
        local = [...local,product];
      }
      
      //console.log(local)
      //console.log(check);
     
     localStorage.setItem("cart",JSON.stringify(local));

     return j;


}else if (action.type==="DELCART") {
      
            let local = JSON.parse(localStorage.getItem("cart"));
            let delCart=local.filter((product,index)=>product.product_id !== action.payload);
            
            localStorage.setItem("cart",JSON.stringify(delCart));

          return JSON.parse(localStorage.getItem("cart"));

      
}else if (action.type==="CLEARCART") { 
    
    localStorage.removeItem("cart");
    return [];


} else{
      let local = JSON.parse(localStorage.getItem("cart"));
          if (local) {
            return local;
          }else{
            return state;
          }
      
    }



}

export default addToCart;