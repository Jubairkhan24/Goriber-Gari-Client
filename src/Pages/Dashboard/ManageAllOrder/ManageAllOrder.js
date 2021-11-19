import React from 'react';
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
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;