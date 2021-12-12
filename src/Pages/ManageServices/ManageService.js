import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Service/Service.css';

const ManageService = ({service,handleDelete}) => {
    const {name,img,desc,price}=service;
    return (
        <div className="service">
            <img src={img} className="img-fluid h-50 w-100" alt="" />
            <h2>{name.toUpperCase()}</h2>
            <h5>Price:{price}</h5>
            <p className="px-3">{desc}</p>
            <button className="btn btn-warning" onClick={handleDelete}>Delete {name} service</button>
        </div>
    );
};

export default ManageService;