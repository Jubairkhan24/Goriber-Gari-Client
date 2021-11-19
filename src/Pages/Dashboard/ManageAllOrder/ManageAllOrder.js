import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./ManageAllOrder.css"

const ManageAllOrder = props => {
    const { name, email, address, number, productName } = props.order;
    return (
        <div>

            <div className="row g-2">
                <div className="col-md form-style d-flex">
                    <div></div>
                    <div class="col-md d-flex">
                        <div></div>
                        <input type="email"
                            class="form-control"
                            id="floatingInputGrid"
                            disabled
                            defaultValue={productName} />
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

                    {/* <table class="table form-style">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <div> */}
                    {/* <tbody>
                            <tr> */}
                    {/* <th scope="row">1</th> */}
                    {/* <td>{productName}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{address}</td>
                                <td>{number}</td>
                            </tr> */}
                    {/* <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr> */}
                    {/* </tbody>
                    </div>

                </table> */}

                    {/* <div className="form-style">
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Username</th>
                            <th>email</th>
                            <th>address</th>
                            <th>phone number</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="email"
                                    class="form-control"
                                    id="floatingInputGrid"
                                    disabled
                                    defaultValue={productName} />
                            </td>
                            <td>
                                <input type="email"
                                    class="form-control"
                                    id="floatingInputGrid"
                                    disabled
                                    defaultValue={name} />
                            </td>
                            <td>
                                <input type="email"
                                    class="form-control"
                                    id="floatingInputGrid"
                                    disabled
                                    defaultValue={email}
                                />
                            </td>
                            <td>
                                <input type="email"
                                    class="form-control"
                                    id="floatingInputGrid"
                                    disabled
                                    defaultValue={address} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="email"
                                    class="form-control"
                                    id="floatingInputGrid"
                                    disabled
                                    defaultValue={number} />
                            </td>
                        </tr>
                    </table>
                </div> */}
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;