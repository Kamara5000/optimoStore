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

export const add =(product)=>{
    return{
        type: "PLUS",
        payload:product
    }
}

export const minus =(product)=>{
    return{
        type: "MINUS",
        payload:product
    }
}

export const mydel =(i)=>{
    return{
        type: "DELCART",
        payload:i
    }
}

export const clear =()=>{
    return{
        type: "CLEARCART"
    }
}

