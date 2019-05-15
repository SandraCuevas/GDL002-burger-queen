import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './css/style.css'
//import './App.css';
import Navbar from './components/navbar';
import Home from './components/home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="The tea shop"/>
        <Route to ="/" render={()=><Home title="Suggestions"/>} />
        {/*<Home title="Suggestions"/>*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
