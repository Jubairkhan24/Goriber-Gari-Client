import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';
import './UserOrder.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UserOrder = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://lit-mountain-50683.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('purchaged successfully')
                    reset()
                }
                console.log(res)
            })
    }

    useEffect(() => {
        fetch(`https://lit-mountain-50683.herokuapp.com/services/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);


    const [service, setService] = useState({});
    return (
        <div>
            <Navigation></Navigation>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src={service.img} alt="" />
                    </div>
                    <div className="col">
                        <h2 style={{ color: '#0F8C9C' }}>{service.name}</h2>
                        <p style={{ fontWeight: '900' }}>{service.description}</p>
                        <h4 style={{ color: '#0F8C9C' }}>Price: {service.price}$</h4>
                        <div className="add-service">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.displayName} />
                                <input  {...register("email")} defaultValue={user.email} placeholder="email" />
                                <textarea {...register("address")} placeholder="Your address" />
                                <input type="number" {...register("number")} placeholder="phone number" />

                                <input type="submit" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserOrder;