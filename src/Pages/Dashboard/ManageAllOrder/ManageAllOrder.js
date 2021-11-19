import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./ManageAllOrder.css"

const ManageAllOrder = props => {
    const { name, email, address, number } = props.order;
    return (
        <div>
            <div class="row g-2 ">
                <div class="col-md d-flex">
                    <input type="email"
                        class="form-control"
                        id="floatingInputGrid"
                        disabled
                        defaultValue={name} />
                    <input type="email"
                        class="form-control"
                        id="floatingInputGrid"
                        disabled
                        defaultValue={email}
                    />
                    <input type="email"
                        class="form-control"
                        id="floatingInputGrid"
                        disabled
                        defaultValue={address} />
                    <input type="email"
                        class="form-control"
                        id="floatingInputGrid"
                        disabled
                        defaultValue={number} />
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;