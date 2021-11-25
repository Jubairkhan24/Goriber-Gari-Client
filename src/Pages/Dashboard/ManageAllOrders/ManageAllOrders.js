import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://lit-mountain-50683.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            {/* <h2>this is manage all orders</h2> */}
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontWeight: 600, m: 5, margin: '70px 0px', color: '#0F8C9C' }} variant="h4" component="div">
                        All Orders
                    </Typography>
                    <div className="d-flex my-5">
                        <input type="text" disabled defaultValue="product name" />
                        <input type="text" disabled defaultValue="customer name" />
                        <input type="text" disabled defaultValue="email" />
                        <input type="text" disabled defaultValue="address" />
                        <input type="text" disabled defaultValue="phone number" />
                        {/* <h2>this is editable comment</h2> */}
                    </div>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            orders.map(order => <ManageAllOrder
                                key={order.name}
                                order={order}
                            ></ManageAllOrder>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default ManageAllOrders;