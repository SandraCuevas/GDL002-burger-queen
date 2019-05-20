import React from 'react';

const Items = (props) => (
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
                        
                            <button className="list-group-item" onClick={()=>{
                                this.submit(menuDetail.item, menuDetail.price);
                                    }} type="submit">  
                                <h5 className="card-title">{menuDetail.item}</h5>
                                <p className="card-text">{'$'+ menuDetail.price}</p>
                            </button>
                        </div>
                        )
                    }
                   {/* <MenuDetail menuList={this.state.menu} otro={otro}/>*/}
                </div>
            </div>
        </div>
        


    </div>

</div>
);

export default Items;
        
     

