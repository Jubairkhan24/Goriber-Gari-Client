import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import './AddReview.css'
import useAuth from '../../../hooks/useAuth';
import { Typography } from '@mui/material';

const AddReview = () => {

    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = React.useState(2);

    const onSubmit = data => {
        console.log(data);
        axios.post('https://lit-mountain-50683.herokuapp.com/reviews', data)
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


                    {/* <Rating name="size-medium" defaultValue={2} /> */}
                    <Typography component="legend">Rating</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />


                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;