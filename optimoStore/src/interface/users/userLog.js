import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UserLog=(props)=>{
    let [pass, setPass] = useState('');
    let [user,setUser] = useState('');
  

    const handleSet=(event)=>{
        let username = event.target.name==="username";
        let password = event.target.name==="password";
        if (password) {
             setPass = (event.target.value);
        }

        else if (username) {
             setUser = (event.target.value);
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(pass,user)
        if (pass === '' || user === '') {
            alert ("username or password cannot be empty")
        }    
        
        const m = {
               password: pass,
               username: user,
        };
            
        // axios.post('//localhost:80/react/optimoBackend/userLog.php',m)
        // .then(response=>{console.log(response.data); 
        //     //handleCheck(response.data);
        //      //handleMyLog(response.data);
        //      handleCheck(response.data);
         //})
        //.catch(err=>console.log(err));
    }

    const handleCheck=(log)=>{
            console.log('this is mylog')
          console.log(log);

          console.log(log[1]);
          

           if (log[1].success) {
               alert(log[1].message);
               localStorage.setItem("userLog",JSON.stringify(true));
               localStorage.setItem('user',JSON.stringify(log[0]));
               props.history.push('/UserCheckOut');
           
            }else if(!log.success){
                alert(log.message)
            }
               

    }

    
    console.log(props)
    return(
    <React.Fragment>
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Sign In</h5>
                <input type="text"  className="form-control m-2" name="username" onChange={handleSet}  placeholder="Enter Username" />
                <input type="password" required className="form-control m-2 " name="password" onChange={handleSet} placeholder="Enter password" />
                <button className="btn btn-primary m-2" onClick={handleSubmit} >Sign In</button> 
        </div>
    </div>
   </React.Fragment>
    )
}
export default UserLog;