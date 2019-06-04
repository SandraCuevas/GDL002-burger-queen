import React from "react";

class input extends React.Component{
    constructor(){
        super()

        this.state = {
            name : ""
        }

        this.addName = this.addName.bind(this);
    }

    updateName ( key, value){
        this.setState ({
            [key]:value
        })
    }

    addName (e){
        e.preventDefault(e);
        this.setState({
            name: this.state.name + e.target.value
        });
    }

    render(){
    return (
        <form>
            <div className= "col-md-12  justify-content-center" >
            <br/>
            <input 
                type={"text"} 
                id={"clientName"} 
                value={this.state.name}
                className="form-control form-control-lg col-md-12 background" 
                placeholder="Nombre del cliente" 
                onChange={e => this.updateName('name', e.target.value)} 
                required />
                <button type="submit" className="btn btn-success col-md-2">Enviar</button>
            </div>
        </form> 
    )
}
} 

export default input;
