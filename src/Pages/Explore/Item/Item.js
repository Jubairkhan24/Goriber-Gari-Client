import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@restart/ui/esm/Button';
import "./Item.css"
import PurchageModal from '../../Appointment/PurchageModal/PurchageModal';
import { Link } from 'react-router-dom';

const Item = ({ item, date, setBookingSuccess }) => {
    const { name, description, img, price, _id } = item;
    // const [openPurchage, setPurchageOpen] = React.useState(false);
    // const handlePurchageOpen = () => setPurchageOpen(true);
    // const handlePurchageClose = () => setPurchageOpen(false);
    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '170px', margin: '0 auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="h6" color="">
                            {price}
                        </Typography>
                        <Link className="btn-style d-flex justify-content-center" to={`userOrder/${_id}`}>
                            <button className="btn btn-design text-center">Purchage</button>
                        </Link>
                    </CardContent>
                </Card>
            </Grid>
            {/* <PurchageModal
                date={date}
                item={item}
                openPurchage={openPurchage}
                handlePurchageClose={handlePurchageClose}
                setBookingSuccess={setBookingSuccess}
            ></PurchageModal> */}
        </>
    );
};

export default Item;