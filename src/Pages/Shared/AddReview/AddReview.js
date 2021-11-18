import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddReview.css'
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {

    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Your Review posted successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="add-service">
                <h2>Add a Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.displayName} />

                    <input  {...register("img")} defaultValue={user.email} placeholder="email" />
                    <textarea {...register("description")} placeholder="Your Review" />
                    <input type="number" {...register("price")} placeholder="Rating 5 out of...." />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;