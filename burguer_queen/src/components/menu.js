import React, {Component} from 'react';
import firebase from '../firebase/fbStart';
//import  {menu}  from '../menu.json'

class ShowMenuFb extends Component {
    constructor(){
        super();
        this.state = {
            menu:[],
            orders:[]

        };
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
                            
                                {this.state.menu.map((menuDetail)=>
                                    <div className="list-group list-group-flush col mt-4" >
                                    
                                        <button className="list-group-item" >
                                            <h5 className="card-title">{menuDetail.item}</h5>
                                            <p className="card-text">{'$'+ menuDetail.price}</p>
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

    export default ShowMenuFb;