// import React from 'react'
import './Post.css'

import React, { Component } from 'react'
import axios from 'axios'

export class Get extends Component {
  state={
    data:[]
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8080/showDetails').then(response=>{
      this.setState({data:response.data});
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div >
     
          <h2 className='login'> </h2>
          {/* <div classname="backgroundimg"> */}
          
          <table border={1} id="tbl">
        <thead>
          <tr>
            <th>PhotographyId</th>
            <th>PhotographerName</th>
            <th>Email</th>
            <th>Category</th>
           
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(user =>(
            <tr key={user.eid}>
            <td>{user.eid}</td>
            <td>{user.sname}</td>
            <td>{user.email}</td>
            <td>{user.category}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
          
             
         
         
   
      
  </div>
    )
  }
}

export default Get