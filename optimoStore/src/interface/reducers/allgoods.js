


const allGoods = (state=[], action)=>{

       
        if (action.type==="push"  ) {
            
            let k = [...state,"rice"];
            return k;

        }

        else if (action.type==="pushing") {
        
            let j =[...state, action.payload ];
          return j;   
        }

        else{
            

    return state;
        }
}

export default allGoods;