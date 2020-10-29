export const add = (num)=>{
    return (
        {
            type : "ADDITION",
            payload : num
        }
    )
}

export const sub = (price)=>{
    return(
        {
            type: "SUBTRACTION",
            payload: price,
        }
    )
}

export const dub = (mul)=>{
    return(
        {
            type: "DOUBLE",
            payload : mul
        }
    )
}

export const multi = (val)=>{
    return{
        type: "MANI",
        payload: val
    }
}


export const pusher =(val)=>{
    return{
        type: "pushing",
        payload: val
    }
}