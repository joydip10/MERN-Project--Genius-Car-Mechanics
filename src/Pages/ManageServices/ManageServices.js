import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Home/Services/Services.css';
import ManageService from './ManageService';


const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://sleepy-dawn-60653.herokuapp.com/services')
            .then(res => setServices(res.data));
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Confirm to delete');
        if (proceed) {
            axios.delete(`https://sleepy-dawn-60653.herokuapp.com/services/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        alert('Successfully Deleted One Service!');
                        const remainingData = services.filter(service => service._id !== id);
                        setServices(remainingData);
                    }
                })
        }
    }
    return (
        <div>
            <h1>Manage Services</h1>
            <div className="sercvice-container">
                {
                    services.map(service => <ManageService key={service._id} service={service} handleDelete={() => handleDelete(service._id)}></ManageService>)
                }
            </div>
        </div>
    );
};

export default ManageServices;