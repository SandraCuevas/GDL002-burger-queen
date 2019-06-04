import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Menu from './components/menu';
import MenuBrunch from './components/menuBrunch';
import Kitchen from './components/kitchen';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="The tea shop"/>
        <Route exact path ="/" render={()=><Home title="Suggestions"/>} />
        <Route path ="/menu" component={Menu} />
        <Route path ="/menuBrunch" component={MenuBrunch} />
        <Route path ="/kitchen" component={Kitchen} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
