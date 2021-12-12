import React from 'react';
import { useHistory, useLocation } from 'react-router';
import GetAuth from '../Context/GetAuth';

const Login = () => {
    const {user,googleSignIn,googleSignOut,setError,setIsLoading}=GetAuth();
    const history=useHistory();
    const location=useLocation();
    let redirectPath='/home';

    if(location.state){
        if(location.state.from){
            redirectPath=location.state.from;
        }
    }
    
    const logIn=()=>{
        googleSignIn()
        .then(res=>history.push(redirectPath))
        .catch(err=>{
            setError(err.message);
        })
        .finally(()=>setIsLoading(false))
    }
    return (
        <div className="mt-3">
            <h2 className="text-primary">Please Login</h2>
            {
                user?.email
                ?<button className="btn btn-warning" onClick={googleSignOut}>Log Out</button>
                :<button className="btn btn-warning" onClick={logIn}>Google Log in</button>
            }
        </div>
    );
};

export default Login;