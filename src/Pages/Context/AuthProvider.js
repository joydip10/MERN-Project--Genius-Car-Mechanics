import React from 'react';
import { createContext } from 'react';
import useFirebase from './../../useFirebase/useFirebase';

export const context=createContext('');

const AuthProvider = ({children}) => {
    const value=useFirebase();
    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    );
};

export default AuthProvider;