
    
let k = [
    {img:"image/shoe1.jpg", name:" Italian Bag", price:"$100" },
    {img:"image/shoe2.jpg", name:"Japanese Bag ", price:"$55"},
    {img:"image/shoe3.jpg", name:"Italian Shoe", price:"$75" },
    {img:"image/shoe1.jpg", name:" Italian Bag", price:"$100" },
    {img:"image/shoe2.jpg", name:"Japanese Bag ", price:"$55"},
    {img:"image/shoe1.jpg", name:" Italian Bag", price:"$100" },
    {img:"image/shoe2.jpg", name:"Japanese Bag ", price:"$55"},
    {img:"image/shoe1.jpg", name:" Italian Bag", price:"$100" },
    {img:"image/shoe2.jpg", name:"Japanese Bag ", price:"$55"},
    {img:"image/shoe1.jpg", name:" Italian Bag", price:"$100" },
    {img:"image/shoe2.jpg", name:"Japanese Bag ", price:"$55"},
   ]
 

const addProduct = (state=k, action)=>{
    let m;
    if(action.type==="PROD"){
        //let a = event.target.value;
        
          // console.log(k) ;
        
            // k = [...k,action.payload];
                console.log('this is the x'+action.payload.x)
            // k = [...k,{img:"image/shoe1.jpg", name:" Ghanaian Bag", price:"$100" }]
          console.log(k)

          let myObj = { img:"image/shoe1.jpg", name:action.payload.y, price:action.payload.x };
             m = [...k,myObj]
         
          console.log(k)

        return m ;
        
    }


    else{
        return state;
    }



}

export default addProduct;