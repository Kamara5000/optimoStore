
    
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
          console.log(j)

        return j ;
        
    }

    else if (action.type==="DELCART") {
      let delCart=state.filter((product,index)=>index !=action.payload);
      return delCart;
    }
    else{
        return state;
    }



}

export default addToCart;