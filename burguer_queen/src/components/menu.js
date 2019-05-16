import React from 'react';
import { menu } from '../menu.json'



const showMenu = (props) => (
   
    <div className="main-content">
        <div className="container">
            <h2> MENUSSSS </h2>
            <div class="card">
                <div class="card-header">
                    MENU
                </div>
                {menu.map((menuDetail, index)=>
                    <ul class="list-group list-group-flush" key={index}>
                        <button class="list-group-item">
                            <h5 className="card-title">{menuDetail.Item}</h5>
                            <p className="card-text">{menuDetail.Price}</p>
                        </button>
                    </ul>
                    )
                }
            </div>
        </div>
        
    </div>
);

export default showMenu;