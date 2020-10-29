import React, {useState, useEffect} from 'react';
import axios from 'axios'

const UserReg=(props)=>{
    
    let [myVal, handleMyVal] = useState(3);
    let [name, changeName] = useState("AYO");


    let x,k,y,z,p;

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

    const handleSet=(event)=>{
        let check= event.target.name==="product";
        let numb= event.target.name==="num";
        let passw= event.target.name==="pass";
        let details = event.target.name==="details";
        let pic = event.target.name==="pic";
        if (check) {
             x= (event.target.value);
           // handleProduct({...pro,price:x})
          //console.log(x)  
        }

        else if (numb) {
             k = (event.target.value);
           // handleProduct({...pro,noAv:k})
            //console.log(k)
        }
        else if (details) {
            z = (event.target.value);
          // handleProduct({...pro,noAv:k})
           //console.log(k)
       }


        else if(passw) {
             y = (event.target.value);
            //handleProduct({...pro,name:y})
           // console.log(y)
  
        }

    else if (pic) {
        p = (event.target.files[0]);
        console.log(p)
    }
    
    
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
            // const m = {
            // //    product_price: y,
            // //    no_available: k,
            // //     product_name:x,
            // //     product_details:z,
            //     file: p


            // };
            
            
            

            let m = new FormData();
            m.append("pic",p);
            m.append("product_name",x);
            // console.log(m)
        //axios.post('//localhost:80/react/optimoBackend/adminpost.php',m)
        axios({
        method: "post",
        url: "http://localhost:80/react/optimobackend/test.php",
        data: m
       // {
         // name:y,
          //price:x,
          //available:k}
    ,
        headers: { 
            // 'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
         } })
    
    .then(response=>{console.log(response.data); 
      
    }
    
            
        //val=>actions.setStatus(val.data)

    
    )
    .catch(err=>console.log(err));
};
    
    console.log(props)
    return(
        <React.Fragment>
        THIS IS THE USER REG <br/>
             i have {myVal} balls 
             my nam is {name}
             <button onClick={clickMe} >increase</button>
             <button onClick={editName} >name</button>
    <form  >
    
     <label >Upload Product Image</label>
    <input type="file" name="pic" onChange={handleSet}/>
    <button type="submit" name="submit" onClick={handleSubmit}>submit</button>
    </form> 
    
        </React.Fragment>
    )
}
export default UserReg;