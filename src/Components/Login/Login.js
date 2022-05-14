import React, {useRef} from 'react'
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase/Firebase";
import './Login.css';


const Login = () => {
 const emailRef = useRef ();
 const passwordRef = useRef();

 const handlelogin =(e)=>{
     e.preventDefault();
     const email = emailRef.current.value;
     const password = passwordRef.current.value;
     console.log(email, password)



     signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)

  });
 }


  return (
    <div  className='login'>
       <form onSubmit = {handlelogin}> 
       <h1>LogIn</h1>

       <input placeholder='Email'  className='input' type = "email" ref={emailRef} required />
<br/>
<input placeholder='Password' className='input' type = "password" ref={passwordRef} required />
<br/>
<button  className='btn' type='submit' >  Login</button>
       </form>
      

    </div>
  )
}

export default Login