const IsUserLog = (state=0, action)=>{

        if(action.type==="USERLOGOUT"){
            
            localStorage.removeItem("user");
            localStorage.removeItem("userLog");
            
            return false

            
        }

        else if (action.type==="USERLOGIN"){
            
            return true;
        } else{
            let user = JSON.parse(localStorage.getItem("user"));
                if (user) {
                    return true
                }
            
                return false
        }
        
        
}

export default IsUserLog