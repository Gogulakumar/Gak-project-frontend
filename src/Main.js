import React from 'react'
import './Main.css'
import {Link} from 'react-router-dom'
function Main() {
  return (
    <div>
       <div classname="Gaklogo">
       <a> <Link to="Form">
        <button type="button" className="button2">Post</button></Link></a><br></br>
        <a><Link to="Get">
        <button type="button" className="button2">Get</button></Link></a><br></br>  
        
        <a><Link to="Delete">
        <button type="button" className="button2">Delete</button></Link></a><br></br>
        <Link to="Update">
        <button type="button" className="button2">Put</button></Link><br></br>
        </div>
    </div>
  )
}

export default Main