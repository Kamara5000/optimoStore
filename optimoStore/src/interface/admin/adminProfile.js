import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import adminHoc from './adminHoc';
import AdminNavBar from './adminNavBar';

const AdminProfile=(props)=>{
    let [admin, setAdmin] = useState('');
    

    const history = useHistory();

    useEffect(()=>{
        let adm = JSON.parse(localStorage.getItem("admin"));

        if (adm) {
            setAdmin(adm);
        }else{
            console.log("no admin")
        }
        
     
    },[]);
    
    

    
    //console.log(props)
    return(
    <React.Fragment>
            
            <div className="container-fluid"> 
                <div className="row mr-sm-2" style={{marginTop:"8rem"}}>
                <h1 className="col-sm-12 text-center mb-4">Admin Dashboard</h1>
                    <div className="col-sm-3" style={{backgroundColor:'#FFFFFF'}}>
                    <AdminNavBar/>   
                    </div>

                    <div className="col-sm-9 p-5 " style={{marginTop:"",backgroundColor:  '#EAEDED'}}>
                    <h1 className="col-sm-12 text-center mb-4">ADMIN PROFILE</h1>
                        <div  className="card border-info mx-auto mt-5  mb-3">
                            <div className="card-body">
                                <p className="font-medium d-flex">Admin Id:  <span className="ml-auto text-break">{admin.admin_id}</span></p>
                                <p className="font-medium d-flex ">Admin Address:  <span className="ml-auto text-break">{admin.admin_address}</span></p>
                                <p className="font-medium d-flex">Admin First Name: <span className="ml-auto text-break">{admin.first_name}</span></p>
                                <p className="font-medium d-flex">Admin Last Name: <span className="ml-auto text-break">{admin.last_name}</span></p>
                                <p className="font-medium d-flex">Admin Username: <span className="ml-auto text-break">{admin.user_name}</span></p>
                            </div>
                        </div>
                    </div>

                </div>
             </div>
      
            

    
   </React.Fragment>
    )
}
export default adminHoc(AdminProfile);