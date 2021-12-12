import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import NotFound from '../../NotFound/NotFound';

const ServiceDesc = () => {
    const {id}=useParams();
    const [service,setService]=useState({});
    
    useEffect(()=>{
        fetch(`https://sleepy-dawn-60653.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setService(data);
        })
    },[])

    // const service= services.filter(service=>service.id===id);
    // console.log(service);
    return (
       <div>
            {/* {
            service.length!==0?
            <div>
                Service:{service[0].name}
            </div>
            :
            <NotFound></NotFound>
             } */}

             <h3>Services: {id}</h3>
             <h2>Service name: {service?.name}</h2>
       </div>
    );
};

export default ServiceDesc;