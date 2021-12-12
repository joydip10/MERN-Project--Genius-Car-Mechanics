import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import firebaseInitialize from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
firebaseInitialize();

const googleProvider=new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoading,setIsLoading]=useState(true);

    const auth= getAuth();

    useEffect(()=>{
        const unsubscribed=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false);
          });
          return ()=>unsubscribed;
    },[])

    const googleSignIn=()=>{
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const  googleSignOut=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message);
          })
          .finally(()=>setIsLoading(false));
    }

    return {
        user,
        googleSignIn,
        googleSignOut,
        setIsLoading,
        setError
    }
};

export default useFirebase;