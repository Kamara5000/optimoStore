import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import AdminSignIn from './adminSignIn';

const AdminReg=(props)=>{

    let [userReg, handleUserReg] = useState('')
    let [uname, setUserName] = useState('');
    let [fName, setFirstName] = useState('');
    let [lName, setLastName] = useState('');
    let [address, setAddress] = useState('');
    let [pass, setPass]= useState('');
    let [isEmpty, setEmpty] = useState(false);
    let [isRegister, setRegister] = useState(false);
    let [adminExist, setExist] = useState(false);

    const history = useHistory();

        const handleSubmit=(e)=>{
            e.preventDefault();

            if (pass === '' || uname === '' || fName === '' || lName === '' || address === '' ) {
                return setEmpty(true);
            }
                let m = new FormData();
                m.append("userName",uname);
                m.append("f_name",  fName);
                m.append("l_name",lName);
                m.append("user_address",address);
                m.append("user_password",pass);
                
                console.log(m)
            axios({
            method: "post",
            url: "//localhost:80/react/optimobackend/adminReg.php",
            data: m,
            headers: { 
                'Content-Type': 'multipart/form-data'
             }, })
        
        .then(response=>{console.log(response.data); 
            
            if(response.data.success === true){
                setRegister(true);
                setEmpty(false);
                console.log('successfully register');
            }else if(response.data.success === false){
                console.log('unable to successfully register');
            }else if(response.data.invalid === true){
                console.log("user already exist please choose another username");
                setExist(true);
                setRegister(false);
                setEmpty(false);
            }
          
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
            if (checkName) {
                 setUserName(event.target.value);
                //handlProName(x);
              //console.log(x)  
            }
    
            else if (checkFname) {
                 setFirstName(event.target.value);
            
                
            }
            else if (checklname) {
                setLastName(event.target.value);
               
           }
    
    
            else if(checkAddress) {
                 setAddress(event.target.value);
    
            }

            else if(checkPass){
                setPass(event.target.value);
            }
            
        
        }
       

    //console.log(props)
    return(
        <React.Fragment>
            <div className="container-fluid px-5" style={{marginTop: '7rem'}}>
                <h2 className="text-md-center mb-5">Create An Admin Account or Log In </h2>
            <div className="row ml-md-5 ">
                <div className="col-sm-4 ml-md-5">
                    <AdminSignIn {...props}/>
                </div>
                <div className="col-sm-4 ml-md-5" style={{ marginTop:'70px'}} >
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Register</h5>
                        {isEmpty && <p className="text-danger text-center card-text p-2">Fill all field to register</p>}
                        {isRegister && <p className="text-success text-center card-text p-2">You have succesfully register sign in to proceed</p>}
                        {adminExist && <p className="text-danger text-center card-text p-2">Admin with the username already exist</p>}
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
export default AdminReg;