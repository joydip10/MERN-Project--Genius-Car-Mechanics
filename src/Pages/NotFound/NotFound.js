import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src="https://image.freepik.com/free-vector/404-error-page-found_41910-364.jpg" alt="" className="img-fluid img-thumbnail rounded-circle" />
            <h1 className="text-danger mt-3">Page Not Found</h1>
            <Link to="/home"><button className="btn btn-secondary">Homepage</button></Link>
        </div>
    );
};

export default NotFound;