import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AppContext = createContext(null);


const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUserDetails = async (token) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASEURL}/api/v1/auth/userdetails`,
        {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token,
          }
        }
      );
      if(data) {
        console.log('From Context: ', data.user);
        setUser(data.user);
        // if (!localStorage.getItem('userdata')){
        //   localStorage.setItem('userdata', JSON.stringify(data.user));
        // }
      }
    } catch(err) {
      console.error(err);
    }
  };

  const contextValue = {
    user,
    fetchUserDetails
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;