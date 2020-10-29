import React, {useState, useEffect} from 'react'

const UserCheckOut=(props)=>{
    
    let [myVal, handleMyVal] = useState(3);
    let [name, changeName] = useState("AYO");

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
    
    console.log(props)
    return(
        <React.Fragment>
        THIS IS THE user UserCheckOut <br/>
             i have {myVal} balls 
             my nam is {name}
             <button onClick={clickMe} >increase</button>
             <button onClick={editName} >name</button>
        </React.Fragment>
    )
}
export default UserCheckOut;