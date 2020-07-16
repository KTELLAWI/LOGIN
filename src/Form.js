import React, {useState,useContext} from 'react'
import  { Authcontext } from './Authcontetxt';


function Form() {
    const [email,setemail] = useState('');
    const [password, setpassword] = useState('');
    const authcontext  = useContext(Authcontext);


              function login(e){
                               
                // send api request validate data and det token 
                if(password== '123' ){
                    const token = "abc";
                    localStorage.setItem('token',token);
                    localStorage.setItem('email', email);
                    authcontext.Setauth({token,email})
                } else {
                    alert("wrong details");

              }
            
              
              }  
            
    return (
        <div>
            
          <form>
          <h2>LOGIN</h2>
              <input className="form-control  " type="email" placeholder="Email" vlaue = {email } onChange= {e=> setemail(e.target.value)} />
              <br />
              <input className="form-control" type="password" placeholder="password" value = {password}  onChange= {e=> setpassword(e.target.value)}   />
              <br />

              <button className="btn btn-primary" onClick={login}>login</button>
              


              </form>  
        </div>
    )
}

export default Form
