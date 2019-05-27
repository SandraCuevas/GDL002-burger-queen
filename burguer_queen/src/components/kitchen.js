import React,{Component} from 'react';
import firebase from '../firebase/fbStart';

export default class KitchenOrder extends Component {
    state={
        items:[]
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


}
export default KitchenOrder;

