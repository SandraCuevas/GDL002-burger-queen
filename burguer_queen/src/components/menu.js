import React, {Component} from 'react';
import firebase from '../firebase/fbStart';
import  Counter  from './counter';
import Order from './order';
//import Items from './components/items';
//import  {menu}  from '../menu.json'

class ShowMenuFb extends Component {
    constructor(){
        super();
        this.state = {
            menu:[],
            orders:[]
        };
        //this.submit = this.submit.bind(this);
};

submit(item, price){
    //console.log(item, price)
    //console.log('props', this.props.addOrders)
     //const orders = this.state.orders;
     const order = {
       item: item,
       price: price
        }
        this.setState({
            orders:[...this.state.orders,order]

        })
     };
      

componentDidMount(){
    const RefMenu = firebase.database().ref('menu');
    RefMenu.on('value', (snapshot) =>{
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

     render(){
        console.log(this.state.orders) 
        return(
   
            <div className="main-content">
                <div className="container">
                    <h2> MENU </h2>
                        <div className="row">
                            <div className="col">
                                OPTIONS
                        </div>
                        <div className="col">
                                ORDER
                        </div>
                        <div className="w-100">
                        
                            <div className="col-md-6">
    
                                {this.state.menu.map((menuDetail,i)=>
                                    <div key = {i} className="list-group list-group-flush col mt-4" >
                                    
                                        <button className="list-group-item" onClick={()=>{
                                            this.submit(menuDetail.item, menuDetail.price);
                                                }} type="submit">  
                                                
                                            <h5 className="card-title">{menuDetail.item}</h5>
                                            <p className="card-text">{'$'+ menuDetail.price}</p>
                                            {/*<Counter/>*/}
                                        </button>
                                    </div>
                                    )
                                }
                               {/* <MenuDetail menuList={this.state.menu} otro={otro}/>*/}
                            </div>
                            <div className="col">
                            
                            </div>
                            <div className="w-100"></div>
                            <Order menuList={this.state.orders}/>
                        </div>
                    </div>
                </div>          
            </div>
        );
    
        }
        
    }

    export default ShowMenuFb;

    