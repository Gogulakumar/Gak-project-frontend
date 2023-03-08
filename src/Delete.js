import axios from 'axios';
import React, { useState } from 'react'
import './Post.css'

function Delete() {
  const [search,setSearch]=useState("");
  const [bookData,setData]=useState([]);
  const searchBook=(evt)=>{
      if(evt.key==="Enter")
      {
          axios.delete('http://127.0.0.1:8080/delete/'+search)
          .then( document.getElementById("dels").innerHTML = "deleted")
          .catch(err=>console.log(err))
      }
  }
return (
  <div><>
  <div className="im">

      </div>
      <div className="header">
          <div className="row1">
         
          </div>
          <div className="row2">
              <h2 id="dels">Delete </h2>
              <div className="search" >
                  <input type="text" placeholder="Enter an ID"  value={search} onChange={e=>setSearch(e.target.value)}
                      onKeyPress={searchBook}/>
                 
                  
              </div>
              
               
          </div>
      </div>
    
      </></div>
)
}

export default Delete