import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import axios from 'axios';
import myHoc from '../hoc';
import AdminNavBar from './adminNavBar';
import AdminDash from './adminDash'; 
import AdminReg from './adminReg';
import adminDash from './adminDash';


const AdminLog=(props)=>{
  
  const logOut=()=>{
      localStorage.removeItem("log");
      props.history.push('/adminReg');
  }


 return(
      <React.Fragment>
<h1>Welcome to the Admin Dashboard</h1>


  <BrowserRouter>
 <AdminNavBar></AdminNavBar>
  <button className="btn btn-primary btn-sm" onClick={logOut} >Logout</button>
  <Switch>
        <Route exact path="/" component={AdminLog}/>
        <Route path="/adminLog/adminDash" component={AdminDash} />
        <Route path="/adminLog/adminReg" component={AdminReg} />
        
      
    </Switch>
  </BrowserRouter>



      </React.Fragment>
  )
}
export default myHoc(AdminLog);





// const AdminLog=(props)=>{
//     let pass,user;
//     let [myVal, handleMyVal] = useState(3);
//     let [name, changeName] = useState("AYO");
//     let [myLog, handleMyLog] = useState("")

//     const editName =()=>{
//         changeName("Wumi")
//     }

//     const clickMe=()=>{
//         handleMyVal(myVal+1)
//     }
    
//     useEffect(()=>{
//         console.log("hello");
//     }, [myVal]

//     )

   
    
//     console.log(props);
    

//     const handleSet=(event)=>{
//         let username = event.target.name==="username";
//         let password = event.target.name==="password";
//         if (password) {
//              pass = (event.target.value);
//            // handleProduct({...pro,price:x})
//           //console.log(pass)  
//         }

//         else if (username) {
//              user = (event.target.value);
//            // handleProduct({...pro,noAv:k})
//             //console.log(k)
//         }
//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//             const m = {
//                password: pass,
//                username: user,
//         };
            
//         axios.post('//localhost:80/react/optimoBackend/adminlog.php',m)
//         .then(response=>{console.log(response.data); 
//             //handleCheck(response.data);
//              handleMyLog(response.data)
      
//         }
//             //val=>actions.setStatus(val.data)
//     )
//         .catch(err=>console.log(err));

//         // axios.get('http://localhost/react/optimobackend/adminlog.php')
//         // .then(response=>{
//         //     //let products = response.data;
//         //     console.log(response.data);
    
//         //     handleMyLog(response.data);
//         // })
    
//         // .catch(err=>(console.log(err)))
    
//     }

//     const handleCheck=(path)=>{
//             console.log('this is mylog')
//           console.log(myLog);

          

//            if (myLog.success) {
//                alert(myLog.message);
//                props.history.push(path);
//            }else if(!myLog.success){
//                alert(myLog.message)
//            }

          
//         // if (response.success) {
//         //     alert("hi")
//         // }else{
//         //     alert(response.message)
//         // }
//     }

//     return(
//         <React.Fragment>
// <h1>Welcome to the Admin Dashboard</h1>
//  <h1>
//  <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link className="navbar-brand" to="/AdminLog">A</Link>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//      <li className="nav-item active">
//         <Link className="nav-link" to="/adminDash">Dashboard</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/UserReg">Register</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/UserCart">UserCart</Link>
//       </li>
//       </ul>
//       </div></nav>

//  </h1>

// <form>
//     <div className="form-group">
//     <label >Username</label>
//     <input type="text" name="username" placeholder="Enter your username"
//      className="form-control" onChange={handleSet}/>
    
//     </div>
//      <div className="form-group">
//     <label >Password</label>
//     <input type="password" name="password" placeholder="Enter your password" 
//     className="form-control" onChange={handleSet}/>
//     <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
//   </div>
//   <button type="submit"  className="btn btn-primary" onClick={handleSubmit} >Log In</button>
  
//   </form>

//   <button   className="btn btn-primary" onClick={()=>handleCheck('/adminDash')}>check if log</button>
    
  
//         </React.Fragment>
//     )
// }
// export default AdminLog;