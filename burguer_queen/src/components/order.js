import React from "react";

// Stateful o Smart Component
// los que son arrow function son Stateless o Dumb Components
export class Order extends React.Component {
    deleteItem = (e, i) => {
        this.props.handleDelete(e, i)
    }
   
  render(){
    console.log(this.props.menuList)
        const order = this.props.menuList.map((menu, i) => {
            return(
                <div>
                    <ul key={i} className="list-group col-md-12">
                        <li className="list-group-item d-flex justify-content-between align-items-center col-md-12">
                            <p>{menu.item}</p>
                            <span>{"$"+ menu.price}</span>
                            <button id={i} onClick={(event)=> this.deleteItem(event, menu)}><i class="fas fa-trash-alt"></i></button>
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