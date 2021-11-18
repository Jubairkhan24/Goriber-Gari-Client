import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';

const Review = (props) => {
    const { name, description, price } = props.review;
    console.log(props.review)
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }} style={{ backgroundColor: '#192230', borderRadius: '5px' }}>
                <CardContent >
                    <Typography variant="h5" component="div" style={{ fontWeight: '600', color: '#0f8c9c', margin: '30px' }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ color: '#ffffff', fontSize: '15px' }} >
                        {description}
                    </Typography>
                    <Typography variant="body2" color="" style={{ fontWeight: '900', color: '#0f8c9c', margin: '15px' }}>
                        Rating: {price}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default Review;