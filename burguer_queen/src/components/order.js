import React from "react";

const Order = props => {
    return (
        <div>
            <ul className="list-group col-md-12">
                <li className="list-group-item d-flex justify-content-between align-items-center col-md-6">
                    Cras justo odio
                    <span className="badge badge-primary badge-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center col-md-6">
                    Dapibus ac facilisis in
                    <span className="badge badge-primary badge-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center col-md-6">
                    Morbi leo risus
                    <span className="badge badge-primary badge-pill">1</span>
                </li>
            </ul>
        </div>
    )
}

export default Order;