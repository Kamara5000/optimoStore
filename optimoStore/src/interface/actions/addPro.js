export const prod =(obj)=>{
    return{
        type: "PROD",
        payload: obj
        
    }
}


export const mycart =(product)=>{
    return{
        type: "CART",
        payload:product
    }
}

export const mydel =(i)=>{
    return{
        type: "DELCART",
        payload:i
    }
}

