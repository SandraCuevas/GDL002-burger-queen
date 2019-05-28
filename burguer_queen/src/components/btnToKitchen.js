import React from "react";
import firebase from '../firebase/fbStart';

class toKitchen extends React.Component {

    constructor(){
        super();

    this.updOrderFb = this.updOrderFb.bind(this);
    }
    updOrderFb = props =>{
        const order = this.props.order;
        const foodOrder =  firebase.database().ref('kitchenOrder/').child("order").push().key;
        let updates = {};
        updates["kitchenOrder/" + foodOrder] = order;
        return firebase.database().ref().update(updates);
    }

    render() {
        return(
            <div className="container">
                {console.log(this.props.order)}
                <button type="submit" onClick={this.updOrderFb}>toKitchen</button>
            </div>
        )
    }
}

export default toKitchen;