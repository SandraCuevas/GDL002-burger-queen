import React from "react";

export class Order extends React.Component{
    render(){
        const order = this.props.menuList.map((menu, i) => {
            return(
                <div>
                    <ul key={i} className="list-group col-md-12">
                        <li className="list-group-item d-flex justify-content-between align-items-center col-md-6">
                            {menu.item}
                            <span className="btn-success">{"$" + " " + menu.price+ " "}</span>
                        </li>
                    </ul>
                </div>
            )
        })
        return(
            order
        )
    }
}

export default Order;