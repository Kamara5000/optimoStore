import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import {connect} from 'react-redux';
import { logIn } from '../actions';

const UserLog=(props)=>{
    let [pass, setPass] = useState('');
    let [user,setUser] = useState('');
    let [isEmpty,setEmpty] = useState(false);
    let [isInvalid,setInvalid] = useState(false);

    const history = useHistory();
    
    

    const handleSet=(event)=>{
        let username = event.target.name==="username";
        let password = event.target.name==="password";
        if (password) {
             setPass(event.target.value);
        }else if (username) {
             setUser(event.target.value);
        }
    }
    

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(pass,user)
        if (pass === '' || user === '') {
            return setEmpty(true);
        }

        const m = {
               password: pass,
               username: user,
        };

        console.log(m)
            
        axios.post('//localhost:80/react/optimoBackend/userLog.php',m)
        .then(response=>{console.log(response.data); 
                let {success} = response.data[1];
                if(success === true) {
                    //alert(success)

                localStorage.setItem("userLog",JSON.stringify(true));
                localStorage.setItem('user',JSON.stringify(response.data[0]));
                history.push('/UserCart');
                props.userLogIn();


                }else if(success === false) {
                    setInvalid(true);
                    setEmpty(false);
                }
             //handleCheck(response.data);
         })
        .catch(err=>console.log(err));
    }

    //console.log(props)
    return(
    <React.Fragment>
    <div className="card">
        
        <div className="card-body">
            <h5 className="card-title">Sign In</h5>
                {isEmpty && <p className="text-danger text-center card-text p-2">Username or Password must not be empty</p>}
                 {isInvalid && <p className="text-danger text-center card-text p-2">Username or password incorrect</p>}
                <input type="text"  className="form-control m-2" name="username" onChange={handleSet}  placeholder="Enter Username" />
                <input type="password"  className="form-control m-2 " name="password" onChange={handleSet} placeholder="Enter password" />
                <button className="btn btn-primary m-2" onClick={handleSubmit} >Sign In</button> 
        </div>
    </div>
   </React.Fragment>
    )
}

const mapStateToProps =state=>{
    return({
        log:state.log,
        myGoods: state.addToCart
    })
  }
  
  const addFunctionToRedux=dispatch=>{
    return {
       userLogIn: ()=>dispatch(logIn())
          }
  }
  
  
export default connect(mapStateToProps, addFunctionToRedux)(UserLog);
