import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const {name,img,desc,price}=service;
    return (
        <div className="service">
            <img src={img} className="img-fluid h-50 w-100" alt="" />
            <h2>{name.toUpperCase()}</h2>
            <h5>Price:{price}</h5>
            <p className="px-3">{desc}</p>
            <Link to={`/services/${service._id}`}><button className="btn btn-secondary">Book {name} service</button></Link>
        </div>
    );
};

export default Service;