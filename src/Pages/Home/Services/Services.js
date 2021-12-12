import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';

// https://ibb.co/VTsLcNh
// https://ibb.co/s1JQCB1
// https://ibb.co/47GB11Q
// https://ibb.co/WPS3jzS
// https://ibb.co/47GB11Q
// https://ibb.co/0JDGG0y
// https://ibb.co/zPSysxG
// https://ibb.co/5Bt8j0Q
// https://ibb.co/Jm12f4R
// https://ibb.co/H7ZtNRB
// https://ibb.co/gWc8HCy



const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://sleepy-dawn-60653.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id="services">
            <h2 className="text-primary mb-3">Our Services</h2>
            <div className="sercvice-container">
            {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
        </div>
        </div>
        
    );
};

export default Services;