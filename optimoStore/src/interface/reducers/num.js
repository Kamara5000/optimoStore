const myNum = (state=0, action)=>{

        if(action.type==="ADDITION"){
            let a = state+action.payload;
            console.log(a)
            return a;
        }

        else if (action.type==="SUBTRACTION"){
            let a = state-action.payload;
            return a;
        } 

        else if (action.type==="DOUBLE") {
            let a = state*action.payload;
            return a;
        }

        else if (action.type==="MANI") {
            let a = state*action.payload;
            return a;
        }

        else{
            return state;
        }


    
}

export default myNum