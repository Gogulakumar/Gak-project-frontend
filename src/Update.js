import axios from 'axios'
import './Post.css'


import React, { Component } from 'react'

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
        eid:'',
        sname:'',
        email: '',
        category: '',
        
    };
  }

  handleIdChange = (event) => {
    this.setState({ eid: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ sname: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  };

 

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        eid: this.state.eid,
        sname: this.state.sname,
        email: this.state.email,
        category: this.state.category,
        
        
      };
    
      axios.post('http://127.0.0.1:8080/addDetails', data)
  };
  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
            <h2 className='login'>Update details</h2>
            {/* <div classname="backgroundimg"> */}
            <div className="ca">
                <h3>Id:</h3>
                <input type="text"  value={this.state.eid}
          onChange={this.handleIdChange} className=''/>
                <br></br>
                <br></br>
                <br></br>
                <h3>Name:</h3> 
                <input type="text"  value={this.state.sname}
          onChange={this.handleNameChange} className='' />
                <br></br>
                <br></br>
                <h3>Email:</h3>
                <input type="email"  value={this.state.email}
          onChange={this.handleEmailChange} className=''/>
                <br></br>
                <br></br>
                <h3>Category:</h3>
                <input type="text"  value={this.state.category}
          onChange={this.handleCategoryChange} className='' />
                <br></br>
               <br></br>
               <br></br>
                < button id="sub" type="submit">Submit</button>
               
            </div>
            
               
           
           
        </form>
        
    </div>
    )
  };
}

export default Post