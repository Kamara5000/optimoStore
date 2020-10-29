import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'


const AdminReg=(props)=>{
    let pass,user;
    let [myVal, handleMyVal] = useState(3);
    let [name, changeName] = useState("AYO");
    //let [myLog, handleMyLog] = useState("")

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

   
    
    console.log(props);
    

    const handleSet=(event)=>{
        let username = event.target.name==="username";
        let password = event.target.name==="password";
        if (password) {
             pass = (event.target.value);
           // handleProduct({...pro,price:x})
          //console.log(pass)  
        }

        else if (username) {
             user = (event.target.value);
           // handleProduct({...pro,noAv:k})
            //console.log(k)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
            const m = {
               password: pass,
               username: user,
        };
            
        axios.post('//localhost:80/react/optimoBackend/adminlog.php',m)
        .then(response=>{console.log(response.data); 
            //handleCheck(response.data);
             //handleMyLog(response.data);
             handleCheck(response.data);

        }
            
    )
        .catch(err=>console.log(err));
    }

    const handleCheck=(log)=>{
            console.log('this is mylog')
          console.log(log);

          

           if (log.success) {
               alert(log.message);

               localStorage.setItem("log",JSON.stringify(true));
               props.history.push('/adminLog');
           }else if(!log.success){
               alert(log.message)
           }

    }

    return(
        <React.Fragment>
   <h1>Welcome  Please Log In In To Acess The Admin Dashboard</h1>         
<form>
    <div className="form-group">
    <label >Username</label>
    <input type="text" name="username" placeholder="Enter your username"
     className="form-control" onChange={handleSet}/>
    
    </div>
     <div className="form-group">
    <label >Password</label>
    <input type="password" name="password" placeholder="Enter your password" 
    className="form-control" onChange={handleSet}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
  </div>
  <button type="submit"  className="btn btn-primary" onClick={handleSubmit} >Log In</button>
  
  </form>

{/* <button   className="btn btn-primary" onClick={()=>handleCheck('/adminLog')}>check if log</button> */}
    
  
        </React.Fragment>
    )
}
export default AdminReg;









// import React, {Component} from 'react';
// //import myHoc from "./hoc";
// import {useSelector,useDispatch} from 'react-redux'
// import {withFormik, Form, Field, ErrorMessage} from 'formik'
// import *as Yup from "yup";
// import Axios from 'axios';
// class AdminReg extends Component{

//     componentWillUnmount(){
//         alert("dont remove me")
//     }

//     componentDidMount(){
//         console.log("how it works page")
//     }

//     componentDidUpdate(){
//         console.log("i have been updated")
//     }

//     state = {
//         details:[

//             {name:"firstName", className:"form-control", width:"50px" ,placeholder:"input your first name"},
//             {name:"lastName", className:"form-control", placeholder:"input your last name"},
//             {name:"email", className:"form-control",placeholder:"enter your email"},
//             {name:"password", className:"form-control", placeholder:"enter password", type:"password" }
//         ]
//      }

     
        
//     render() {
        
//         // const image = require('../../../../optimobackend/uploads/shirt.jpeg')
//         //<img src={require('../../../../optimobackend/uploads/shirt.jpg')} alt="an image" />
                
     
//         let {myName} = this.props;
//         return (
             
//              <React.Fragment>
//                    <div>Welcome back Admin</div> 
//                 <Form>
//                     <div className="form-group" >
//                     {/* <Field name="firstName" placeholder="input first name" />
//                     <ErrorMessage name="firstName"/>
//                     <Field name="lastName" placeholder="input your last name" />
//                     <ErrorMessage name="lastName"/>
//                     <Field name="email" placeholder="input your email" />
//                     <ErrorMessage name="email"/>
//                     <Field  name="password" placeholder="input password" />
//                     <button type="submit" >submit form</button> 
//                      */}
//                     {this.props.status}
//                      {this.state.details.map((detail,i)=>(
//                                 <div key={i}>
//                                     <Field {...detail} />
//                                     <ErrorMessage name={detail.name}/>

//                                 </div>
//                      ))

//                      }
//                             <button type="Submit" className="btn btn-primary" >submit form</button>
//                             </div>
                            
//                     </Form> 
                                  
//             </React.Fragment>
//         );
//     }
// }



// export default withFormik({
//     mapPropsToValues:()=>({
//         firstName : "",
//         lastName : "",
//         email: "",
//         password: "" 
//     }),

//     validationSchema: Yup.object().shape({
//         firstName:  Yup.string().required("Firstname is required"),
//         email: Yup.string().required("email is required").email("input a valid email"),
//         password: Yup.string().required("password is required")
//     }),

//         handleSubmit(values, {props, ...actions }){
//             console.log(actions);
        
         
//         Axios({
//             method: "post",
//             url: "//localhost:80/react/myappbackend/result.php",
//             data: values,
//             headers: { 
//                 'Content-Type': 'application/x-www-form-urlencoded'
//              },
            
//         }).then(val=>actions.setStatus(val.data)

        
//         )
//         .catch(err=>console.log(err));
//     }



// })(AdminReg);