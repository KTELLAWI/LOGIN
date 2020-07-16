import React,{useContext}  from 'react';
import  { Authcontext } from './Authcontetxt';


export default function Header() {
  const authcontext  = useContext(Authcontext);
  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    authcontext.Setauth({});
  }

    return (
        
        <nav class="navbar navbar-light bg-light mt-2 mb2">
    <a class="navbar-brand mb-0 h1" href="#">REACT HOOKS</a>
    <div>
        {authcontext.auth.email
         ? <div>
            {authcontext.auth.email}
            <button className="btn btn-danger btn-sm" onClick={logout}> log out </button>

            </div>: 'you need to login' }
       </div>
                        
       </nav>
       

       
    );
}
