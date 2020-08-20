import React, { useState } from "react";
import Load from './load';


function Signin() {
    const [name, setContact] = useState("");
    const [name1, setContact1] = useState("");
    var username ;
     
    
      function handleChange(event) 
      {
        
            username = event.target.value;
            setContact(username);
            

      }
      function click(event)
      {


       

      }
    
  return (
    <div className="container">
      <h1>
        Hello </h1>
      <form>
        <input
          onChange={handleChange}
          value={username}
          placeholder="Username"
        />
        <input
          placeholder="Password"
        />
       
        <button onclick={click}>Submit</button>
      </form>
    </div>
  );
}

export default Signin;
