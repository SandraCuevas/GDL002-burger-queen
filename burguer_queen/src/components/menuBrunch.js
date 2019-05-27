import React, {Component} from 'react';
import firebase from '../firebase/fbStart';
import Order from './order';

class ShowMenuFb extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu:[],
            orders:[],
            total: 0,
            kitchen:[]
        };
        this.submit = this.submit.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.sumOrder = this.sumOrder.bind(this)
    };   

    componentDidMount(){
        const refMenu = firebase.database().ref('menuTea');
        refMenu.on('value', (snapshot) =>{
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
        };
    
        deleteRow(e, menu) {
            e.preventDefault(e)
            this.setState(prevState => ({
                orders: prevState.orders.filter(element => element !== menu )
            }));
          }

    sumOrder () {
        const priceArr = this.state.orders.map((el) => el.price)
        const items = priceArr.reduce((sum,result)=>{
            return sum + result;
        });
        this.setState({
            total: items
        });
    };

    /*addKitchen = id =>{
        let tempOrder = [...this.state.orders];
        const index = tempOrder.indexOf(this.state.orders(id));
        const item = tempOrder[index];
        item.inKitchen = true;
        item.count = 1;
        const price = item.price;
        item.total = price;
        this.setState(()=>{
            return{orders:tempOrder,kitchen:[...this.state.kitchen, orders]}
        },()=>(console.log(this.state)))

    };*/


     render(){
        return(

                <div className="container">
                    <h2>BRUNCH</h2>
                        <div className="row"> 
                                <div className="col">
                                            <h3>OPTIONS</h3>
                                            
                                                {this.state.menu.map((menuDetail,i)=>
                                                    <div key = {i} className="list-group list-group-flush col mt-4" >
                                                    
                                                        <button className="list-group-item" onClick={()=>{
                                                            this.submit(menuDetail.item, menuDetail.price);
                                                                } } type="submit"> 
                                                            <li className="list-group-item d-flex justify-content-between align-items-center col-md-12"> 
                                                            <p className="card-title">{menuDetail.item}</p>
                                                            <span className="card-text">{'$'+ menuDetail.price}</span>
                                                            </li>
                                                        </button>
                                                    </div>
                                                    )
                                                }
                                </div>  
                                <div className="col">
                                        <h3>ORDER</h3>
                                        <form>
                                        <label>
                                            Client:
                                            <input type="text" name="name" />
                                            <input type="submit" value="Submit" />
                                        </label>
                                        <Order menuList={this.state.orders} handleDelete={this.deleteRow}/>
                                        </form>
                                        <button onClick={this.sumOrder}>TOTAL: $ {this.state.total}</button>
                                    
                                </div>  
                    
                        </div>
                </div>          
            
        );
    
        }
        
    }

    export default ShowMenuFb;

    