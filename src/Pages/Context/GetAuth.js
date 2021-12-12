import { useContext } from 'react';
import { context } from './AuthProvider';

const GetAuth = () => {
    
    return useContext(context);
};

export default GetAuth;