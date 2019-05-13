import React from 'react';
import './css/style.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <h2 class="logo"><a class="logo-link" href="#">THE TEA SHOP</a></h2>
        <ul class="nav-menu">
          <li><a class="nav-menu__link" href="#">ORDER</a></li>
          <li><a class="nav-menu__link" href="#">KITCHEN</a></li>
          <li><a class="nav-menu__link" href="#">LOGOUT</a></li>

        </ul>
      </nav>
     
    </div>
  );
}

export default App;
