import React, {Component} from 'react';
import myHoc from "../admin/hoc";
import {useSelector,useDispatch} from 'react-redux'
import {withFormik, Form, Field, ErrorMessage} from 'formik'
import *as Yup from "yup";
import Axios from 'axios';
class How extends Component{

    componentWillUnmount(){
        alert("dont remove me")
    }

    componentDidMount(){
        console.log("how it works page")
    }

    componentDidUpdate(){
        console.log("i have been updated")
    }

    state = {
        details:[

            {name:"firstName", placeholder:"input your first name"},
            {name:"lastName", placeholder:"input your last name"},
            {name:"email", placeholder:"eneter your email"},
            {name:"password", placeholder:"enter password", type:"password" }
        ]
     }

     
        
    render() {
        
     
        let {myName} = this.props;
        return (
             
             <React.Fragment>
                <Form>
                    {/* <Field name="firstName" placeholder="input first name" />
                    <ErrorMessage name="firstName"/>
                    <Field name="lastName" placeholder="input your last name" />
                    <ErrorMessage name="lastName"/>
                    <Field name="email" placeholder="input your email" />
                    <ErrorMessage name="email"/>
                    <Field  name="password" placeholder="input password" />
                    <button type="submit" >submit form</button> 
                     */}
                    {this.props.status}
                     {this.state.details.map((detail,i)=>(
                                <div key={i}>
                                    <Field {...detail} />
                                    <ErrorMessage name={detail.name}/>

                                </div>
                     ))

                     }
                            <button type="Submit" >submit form</button>
                    </Form>                
            </React.Fragment>
        );
    }
}



export default withFormik({
    mapPropsToValues:()=>({
        firstName : "",
        lastName : "",
        email: "",
        password: "" 
    }),

    validationSchema: Yup.object().shape({
        firstName:  Yup.string().required("Firstname is required"),
        email: Yup.string().required("email is required").email("input a valid email"),
        password: Yup.string().required("password is required")
    }),

        handleSubmit(values, {props, ...actions }){
            console.log(actions);
        
         
        Axios({
            method: "post",
            url: "//localhost:80/react/myappbackend/result.php",
            data: values,
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
             },
            
        }).then(val=>actions.setStatus(val.data)

        
        )
        .catch(err=>console.log(err));
    }



})(How);