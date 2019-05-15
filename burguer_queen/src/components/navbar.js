import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = (props) => (
    <nav>
        <h2 className="logo"><a class="logo-link" href="#">{props.title}</a></h2>
        <ul className="nav-menu">
          <li><NavLink className="nav-menu__link" to="/menu">MENU</NavLink></li>
          <li><NavLink className="nav-menu__link" to="/kitchen">KITCHEN</NavLink></li>
          <li><NavLink className="nav-menu__link" exact to="/" >LOGOUT</NavLink></li>
        </ul>
      </nav>
);

export default Navbar;