import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserLog from './userLog'

const UserReg=(props)=>{
    
    let [myVal, handleMyVal] = useState(3);
    let [name, changeName] = useState("AYO");
    let [userReg, handleUserReg] = ('')


    let x,k,y,z,p,s;

    const editName =()=>{
        changeName("Wumi")
    }

    const clickMe=()=>{
        handleMyVal(myVal+1)
    }
    
    useEffect(()=>{
        console.log("hello");
    }, [myVal]

    )

        const handleSubmit=(e)=>{
            e.preventDefault();
            
                  let m = new FormData();
                m.append("userName",p);
                m.append("f_name",  x);
                m.append("l_name",z);
                m.append("user_address",y);
                m.append("user_password",k);
                m.append('submit',s);
                
                console.log(m)
         //axios.post('//localhost:80/react/optimoBackend/adminpost.php',m)
            axios({
            method: "post",
            url: "//localhost:80/react/optimobackend/userReg.php",
            data: m,
            headers: { 
                'Content-Type': 'multipart/form-data'
             }, })
        
        .then(response=>{console.log(response.data); 
            handleReg(response.data);
          
        }
        )
        .catch(err=>console.log(err));
    
            
       
    };
        
       const handleSet=(event)=>{
            let checkName= event.target.name==="userName";
            let checkFname= event.target.name==="fName";
            let checklname= event.target.name==="lName";
            let checkAddress = event.target.name==="userAddress";
            let checkPass = event.target.name==="userPass";
            let checksub = event.target.name ==="submit"
            if (checkName) {
                 p= (event.target.value);
                //handleProName(x);
              //console.log(x)  
            }
    
            else if (checkFname) {
                 x = (event.target.value);
            
                
            }
            else if (checklname) {
                z = (event.target.value);
               
           }
    
    
            else if(checkAddress) {
                 y = (event.target.value);
    
            }

            else if(checkPass){
                k= (event.target.value);
            }
            else if(checksub){
                s= (event.target.name);
            }
        
        }
       
        const handleReg=(log)=>{
            console.log('this is mylog')
          console.log(log);
            if (log.invalid) {
                alert(log.message)
            }
            else if (log.success) {
                alert(log.message);
            }else if(!log.success){
                alert(log.message)
            }  
        
    }

    console.log(props)
    return(
        <React.Fragment>
            <div className="container-fluid px-5" style={{marginTop: '10rem'}}>
            <div className="row ml-md-5 ">
                <div className="col-sm-4 ml-md-5">
                    <UserLog {...props}/>
                </div>
                <div className="col-sm-4 ml-md-5" style={{ marginTop:'70px'}} >
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Register</h5>
                        <form className="form-group" >
                                <input type="text" className="form-control m-2 " name="fName" onChange={handleSet} placeholder="Enter your First Name" />
                                <input type="text" className="form-control m-2 " name="lName" onChange={handleSet} placeholder="Enter your last Name" />          
                                <input type="text" className="form-control m-2 " name="userName" onChange={handleSet} placeholder="Enter Username" />
                                <input type="text" className="form-control m-2 " name="userAddress" onChange={handleSet} placeholder="Enter a valid address" />
                                <input type="password" className="form-control m-2 " name="userPass" onChange={handleSet} placeholder="Enter password" />
                                <button type="submit" name="submit" className="btn btn-primary m-2" onClick={handleSubmit} >Register</button> 
                       
                        </form>
                                </div>



                    </div>

                </div>

            </div>
            </div>
            
    
        </React.Fragment>
    )
}
export default UserReg;