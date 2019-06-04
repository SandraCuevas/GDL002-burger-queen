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
                <button className= "col-md-12 btn btn-primary"  type="button" data-toggle="modal" data-target="#exampleModal" onClick={this.updOrderFb}>TO KITCHEN</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Send to Kitchen</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Your order is cooking right now!
                        </div>
                        <div class="modal-footer">
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default toKitchen;