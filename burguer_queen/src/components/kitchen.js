import React,{Component} from 'react';
import firebase from '../firebase/fbStart';

class KitchenOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ordersKitch: [], 
            counter: 0
            
        };
    };   

    componentWillMount(){
        function snapshotToArray(snapshot){
            let orders = []

            snapshot.forEach(order => {
                const items = order.val();
                items.key = order.key;

                orders.push(items)
            });
            return orders
        }
        const dbFoodOrdersRef = firebase.database().ref();
        const foodOrdersRef = dbFoodOrdersRef.child("kitchenOrder/");
        foodOrdersRef.on("value", s=>{
            const ordersForArray = snapshotToArray(s);
            this.setState({
                ordersKitch: ordersForArray
            })
        })
    }

    deleteRow(e, orders) {
        e.preventDefault(e)
        this.setState(prevState => ({
            ordersKitch: prevState.orders.filter(element => element !== orders )
        }));
      }

   
    render(){
        return(
   
            
            <div class="card">
            {this.state.ordersKitch.map((orders, i) =>
            <div class="card-body">
                <h5 class="card-title">Orden #{i+1}</h5>
                <div>
                    {orders.map((item, i)=>
                    <div>
                        <p class="card-text"></p>
                        <a class="card-link">{item.item}</a>
                        
                    </div>
                    )}
                    <button id={i} onClick={(event)=> this.deleteRow(event, orders)}><i class="fas fa-trash-alt"></i></button>
                </div>    
                  
            </div>
            )}
        </div>      
            
        );
    
        }
        
    }



export default KitchenOrder;

