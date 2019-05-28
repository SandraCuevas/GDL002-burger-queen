import React,{Component} from 'react';
import firebase from '../firebase/fbStart';

class KitchenOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu:[],
            orders:[],
            total: 0
            
        };
    };   

    componentDidMount(){
        const refOrder = firebase.database().ref('kitchenOrder');
        refOrder.on('value', (snapshot) =>{
            let menu1= snapshot.val();
            let newStateMenu = [];

            for (let menu2 in menu1){
                newStateMenu.push({
                    item: menu1[menu2].item,
                    price: menu1[menu2].price,
                    type: menu1[menu2].type
                });
            }
            this.setState({
                menu: newStateMenu
            });
        });
    }

    submit(item, price){

        const order = {
        item: item,
        price: price
            }
            this.setState({
                orders:[...this.state.orders,order]

            })
    }
    render(){
        return(
   
            
                <div className="container">
                    <h2>KITCHEN</h2>
                        <div className="row"> 
                                <div className="col">
                                            <h3>ORDER</h3>
                                            
                                                {this.state.menu.map((menuDetail,i)=>
                
                                                    <div key = {i} className="list-group col mt-4" >
                                                    
                                                        <div className="list-group-item" > 
                                                            <li className="d-flex justify-content-between align-items-center col-md-12"> 
                                                            <p className="card-title">{menuDetail.item}</p>
                                                            <span className="card-text">{'$'+ menuDetail.price}</span>
                                                            </li>
                                                        </div>
                                                    </div>
                                                    )
                                                }
                                </div>  
                                
                    
                        </div>
                </div>          
            
        );
    
        }
        
    }



export default KitchenOrder;

