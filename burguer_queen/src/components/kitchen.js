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
        function snapshotArray(snapshot){
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
            const ordersArray = snapshotArray(s);
            this.setState({
                ordersKitch: ordersArray
            })
        })
    }

    deleteRow(e, orders) {
        e.preventDefault(e)
        this.setState(prevState => ({
            ordersKitch: prevState.ordersKitch.filter(element => element !== orders )
        }));
      }

   
    render(){
        return(
   
            
            <div className="card text-center">
            {this.state.ordersKitch.map((orders, i) =>
            <div className="card-body">
                <h5 className="card-title">Orden #{i+1}</h5>
                <div>
                    {orders.map((item, i)=>
                    <div>
                        <p className="card-text"></p>
                        <p className="card-link">{item.item}</p>
                        
                    </div>
                    )}
                    <button id={i} onClick={(event)=> this.deleteRow(event, orders)}><i className="fas fa-check col-md-12"></i></button>
                </div>    
                  
            </div>
            )}
        </div>      
            
        );
    
        }
        
    }



export default KitchenOrder;

