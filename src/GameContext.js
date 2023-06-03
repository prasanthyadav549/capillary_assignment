import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from './firebase';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';

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
    const [maxLives,setMaxLives] = useState(4)
    const [rewards, setRewards] = useState([])
    const [reward,setReward] = useState('')
    const [lives,setLives] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

   

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user){ setUser(user);
          console.log(user);
        }
      
        else {
          setUser(null);
          setLives(maxLives);
         
        }
      });
    }, []);

    const addRewards = async (value) => {
      const user = auth.currentUser;
    
      const ref = doc(db, "rewards", user?.uid);
      const playLimitRef = doc(db, "playLimit", user?.uid);
    
      try {
        const playLimitSnap = await getDoc(playLimitRef);
        const playLimitData = playLimitSnap.data();
    
        if (playLimitData) {
          const newLimit = playLimitData.limit + 1;
    
          await setDoc(playLimitRef, {
            limit: newLimit,
          });
    
          setLives(maxLives-newLimit); // Update the local 'lives' state
        }
      } catch (error) {
        console.log(error);
        setAlert({
          open: true,
          type: "error",
          message: error.message,
        });
      }
    
      try {
        await setDoc(ref, {
          rewards: rewards ? [...rewards, value] : [value],
        });
    
        setAlert({
          open: true,
          type: "success",
          message: "Reward Saved Successfully",
        });
      } catch (error) {
        console.log(error);
        setAlert({
          open: true,
          type: "error",
          message: error.message,
        });
      }
    };
    
    

    useEffect(() => {
      if (user) {
        const rewardRef = doc(db, "rewards", user?.uid);
        const limitRef = doc(db, "playLimit", user?.uid);
        var unsubscribeRewards = onSnapshot(rewardRef, (value) => {
          if (value.exists()) {
            console.log("rewards", value.data().rewards);
            setRewards(value.data().rewards);
          } else {
            console.log("No Items in rewards");
          }
        });
    
        var unsubscribeLimit = onSnapshot(limitRef, (value) => {
          if (value.exists()) {
            console.log("playLimit", value.data().limit);
            setLives(maxLives - value.data().limit);
            

          } else {
            console.log("No play limit set");
            setLives(maxLives);
          }
        });

       
    
        return () => {
          unsubscribeRewards();
          unsubscribeLimit();
        };
      }
    }, [user]);
    

  return (
    <gameList.Provider
    value = {{alert,setAlert,user,rewards,maxLives, addRewards, reward, setReward,lives,setLives,
      isComplete, setIsComplete
    }}
    >
      {children}
    </gameList.Provider>
  )
}

export default GameContext

export const GameListState=()=>{
    return useContext(gameList);
}

