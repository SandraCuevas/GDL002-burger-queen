import React, {Component} from 'react';

import  {menu}  from '../menu.json'

class ShowMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
           orders:[]
        }
         this.submit = this.submit.bind(this);
}

submit(nameItem, price){
    //console.log(nameItem, price)
    //console.log('props', this.props.addOrders)
     const orders = this.state.orders;
 
     const order = {
       item: nameItem,
       price: price
     }
 
     orders.push(order);
     this.props.addOrders(this.state.orders);
     }
 



     render(){

        return(
   
            <div className="main-content">
                <div className="container">
                    <h2> MENUS </h2>
                        <div class="row">
                            <div className="col">
                                MENU
                        </div>
                        <div className="col">
                                ORDER
                        </div>
                        <div className="w-100">
                            <div className="col-md-6">
                            
                                {menu.map((menuDetail, index)=>
                                    <div className="list-group list-group-flush col mt-4"  key={index}>
                                        <button className="list-group-item">
                                            <h5 className="card-title">{menuDetail.item}</h5>
                                            <p className="card-text">{menuDetail.price}</p>
                                        </button>
                                    </div>
                                    )
                                }
                            </div>
                            <div className="col"></div>
                            <div className="w-100"></div>
                        </div>
                    </div>
        

                </div>
                
            </div>
        );
    
        }
        
    }

    export default ShowMenu;