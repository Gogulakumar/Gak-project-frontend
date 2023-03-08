import React, { useState } from "react";
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
        
        <div className="box">
         
    <form onSubmit={handleSubmit}>
      <br></br>
      <label id="h">
        Email:  
      </label>
      <br></br>
      <br></br>
        <input type="email" value={email} onChange={handleEmailChange} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <label id="h">
        Password:
      </label>
      <br></br>
      <br></br>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <br></br><br></br>
      <br></br><br></br>
      <br></br>
      <a> <Link to="Main">
      <button id="b" type="submit">Login</button></Link></a>
    </form>
    </div>
    </div>
  );
}

export default Login;