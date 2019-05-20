
import React, {Component} from 'react';
import ClientName from './clientName';
import Menu from './menu';
import {Link}from 'react-router-dom';

class ComandFood extends Component {
    constructor(props){
        super(props);
        this.state= {
          ordersFood:[],
          value:''
        }
        this.addName = this.addName.bind(this);
        this.addOrdersFood = this.addOrdersFood.bind(this);


     }



addName(value){
this.setState({
  value
});

}

  addOrdersFood(ordersFood){
    console.log(this.state.ordersFood)

    this.setState({
      ordersFood
    });

  }

  removeRow = (event, index) => {
        event.preventDefault();
        this.state.ordersFood.splice(index, 1);
        this.setState({div:this.state.ordersFood});
    }

render(){
 return(

 <div>
      <div>
          <Link to="/comandBreakfast" className="link">Desayuno.</Link>
          <Link to="/" className="link">Salir.</Link>

        <div>

          <div>
          <NameForm  addName={this.addName} />
          </div>

                <div >
                              <div>
                              <Food addOrdersFood={this.addOrdersFood}/>
                              </div>
                </div>

       </div>



       <div>

              <div><h5>Mesero: <span >{this.state.value}</span></h5></div>

           <div>
           {this.state.ordersFood.map((orders, index) =>
                  <div key={index}>
                   <div>Comida {orders.item}</div>
                    <div>Precio {orders.price}</div>
                    <button  onClick={(event) => this.removeRow(event, index)}>eliminar</button>
                  </div>
                )}

           </div>
           </div>

           </div>


    </div>
  );

}

}

export default ComandFood;