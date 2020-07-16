import React,{useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import authprovider, { Authcontext } from './Authcontetxt';
import {Authprovider} from './Authcontetxt'
function App() {
  const authcontext  = useContext(Authcontext);
  return (
    <div className= "container">

    <Header />
    {authcontext.auth.email? "welcome "  : <Form />}
    </div>
  );
}

function Appwithstore(){
  return(
  <Authprovider>
    <App />
  </Authprovider>
  );
}
export default Appwithstore;
