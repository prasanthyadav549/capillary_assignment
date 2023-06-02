import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from './firebase';

const gameList = createContext()

const GameContext = ({children}) => {
   
    const [user, setUser] = useState(null)
    const [alert,setAlert] = useState(
        {
            open:false,
            message:"",
            type:"success",
        }

    );

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user){ setUser(user);
          console.log(user);
        }
      
        else setUser(null);
      });
    }, []);

  return (
    <gameList.Provider
    value = {{alert,setAlert,user}}
    >
      {children}
    </gameList.Provider>
  )
}

export default GameContext

export const GameListState=()=>{
    return useContext(gameList);
}

