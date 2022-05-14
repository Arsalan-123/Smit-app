import React, {useRef} from 'react'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase/Firebase";
import './Signup.css'

const Signup = () => {
    

 const emailRef = useRef ();
 const passwordRef = useRef();

 const handleSignup=(e)=>{
     e.preventDefault();
     const email = emailRef.current.value;
     const password = passwordRef.current.value;
     console.log(email, password)

     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       console.log(user);
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorMessage)
    
       // ..
     });




 }


  return (
    <div className='signup'>
       <form onSubmit = {handleSignup}> 
       <h1>Signup</h1>
       <input placeholder='Username' className='input' type = "text"  required />
<br/>
       <input placeholder='Email' className='input' type = "email" ref={emailRef} required />
<br/>
<input placeholder='Password' className='input' type = "password" ref={passwordRef} required />
<br/>
<button className='btn' type='submit' >  Signup</button>
       </form>
      

    </div>
  )
}

export default Signup;