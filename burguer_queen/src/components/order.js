
import React, {Component} from 'react';
//import ClientName from './clientName';
import Menu from './menu';

class OrderItems extends Component {
    constructor(props){
        super(props);
        this.state= {
          orders:[],
          value:''
        }
        this.addOrders = this.addOrders.bind(this);

}

  addOrders(orders){
    console.log(this.state.orders)

    this.setState({
      orders
    });

  }

  
render(){
 return(

     <div>

                <div >
                              <div>
                              <Menu addOrders={this.addOrders}/>
                              </div>
                </div>

       <div></div>

              <div><h5>Mesero: <span >{this.state.value}</span></h5></div>

           <div>
           {this.state.orders.map((orders, index) =>
                  <div key={index}>
                   <div>Comida {orders.item}</div>
                    <div>Precio {orders.price}</div>
                    <button  onClick={(event) => this.removeRow(event, index)}>eliminar</button>
                  </div>
                )}

           </div>
           
    </div>
           

     );

    }

}

export default OrderItems;