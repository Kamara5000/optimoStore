import React, {Component} from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik'
import AdminDashBoard from './admin/adminDashBoard';
import myHoc from './hoc';
import shoe1 from './image/shoe1.jpg'
class About extends Component {

state = {
  num: 1,
  name: "kenny",
  items: ["bags", "shoe"]
}

  handleIncreaseNum = (num)=>{
    this.setState({num:this.state.num+num});
  }

  handleAddItem = ()=>{
    //let {items} = this.state;
    //anything.push("transistor radio");
    if (this.state.check) {
      this.setState({items:[...this.state.items, this.state.first]})
    }
    
  }

  handleSetValue = event=>{
    let check = event.target.name==="first"?true:false;
    this.setState({check});
    this.setState({[event.target.name]: event.target.value});
    console.log(event.target.value);
  }

  handleDeleteItem = i=>{
    let items = this.state.items.filter((myItem, index)=> index!==i);
    this.setState({items});
  }

  render(){

    console.log(this.state.props)
    return(
      <React.Fragment>
      {this.state.num}
      <input name="first" onChange={this.handleSetValue}/>
      <input name="second" onChange={this.handleSetValue}/>

      {this.state.items.length>0?
       this.state.items.map((item,i)=>
       (
        <div key = {i}>
         <AdminDashBoard onDelete={this.handleDeleteItem} index={i}  thisItem={item}/>
       </div>
       
       // <div key={i}>{item}</div>
      )): <div>there is no item here</div>
    }

    <button onClick={()=>this.handleIncreaseNum(3)}>increase num</button>
    <button onClick={this.handleAddItem}>Add items</button>
    <img src={shoe1} alt="shoe1" />

    </React.Fragment>
  );
  }
}

export default myHoc(About);


//   render(){
//     return ( <React.Fragment>
//       {this.state.items.length>0 this.state.items.map(item=>(
//         <div>{item}</div>
//       )) : <div> there is no item here</div>
//     }
//
//       </React.Fragment>  );
//   }
// }



 //displayItems(){
   //if(this.state.items.length>0){
     //return(
       //this.state.items.map(item=>(
         //<div>{items}</div>
       //))
     //)
   //} else {
     //return <div>There is no item in items</div>
   //}
 //}

  //  inreaseNum=()=>{
    //  num++;
    //}

 //render(){
   //return(
     //<React.Fragment>
     //{this.displayItems()}
     //</React.Fragment>
   //)
 //}

 //export default About;
