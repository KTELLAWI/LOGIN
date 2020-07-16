import React, {useState,useContext,useEffect} from 'react';

export const Authcontext = React.createContext();

export  function Authprovider(Props){

    const [auth, Setauth] = useState({
        

    });
    useEffect(() => {
        const email= localStorage.getItem('token');
        const token = localStorage.getItem('email');
        if (email){
            Setauth({
                token,email
            }

            )
        }
        
    }, []);

return(

    <Authcontext.Provider value = {{auth, Setauth}}>
        {Props.children}
    </Authcontext.Provider >
    
);


}