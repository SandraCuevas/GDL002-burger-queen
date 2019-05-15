import React from 'react';

const Navbar = (props) => (
    <nav>
        <h2 className="logo"><a class="logo-link" href="#">{props.title}</a></h2>
        <ul className="nav-menu">
          <li><a className="nav-menu__link" href="#">ORDER</a></li>
          <li><a className="nav-menu__link" href="#">KITCHEN</a></li>
          <li><a className="nav-menu__link" href="#">LOGOUT</a></li>
        </ul>
      </nav>
);

export default Navbar;
