import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';
import './UserOrder.css'

const UserOrder = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    const handlePurchageSubmit = e => {
        alert('purchaged successfully');
        e.preventDefault()
        e.target.reset()
    }

    const [service, setService] = useState({});
    return (
        <div>
            <Navigation></Navigation>
            {/* <h2>this is course: {serviceId}</h2> */}
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <img clasNameName="img-fluid" src={service.img} alt="" />
                    </div>
                    <div className="col" style={{}}>
                        <h2 style={{ color: '#0F8C9C' }}>{service.name}</h2>
                        <p style={{ fontWeight: '900' }}>{service.description}</p>
                        <h4 style={{ color: '#0F8C9C' }}>Price: {service.price}$</h4>
                        <div className="add-service">
                            {/* <h2>Here an Admin can add new Products</h2> */}
                            <form onSubmit={handlePurchageSubmit}>
                                <input placeholder="Name" disabled defaultValue={user.displayName} />
                                <textarea placeholder="Email" disabled defaultValue={user.email} />
                                <input placeholder="Address" />
                                <input type="number" placeholder="Number" />
                                <input className="btn-design" type="submit" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserOrder;