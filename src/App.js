import React from 'react';
import './styles/App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';

import Sillon from './assets/sillon.jpg'
import Mesa from './assets/mesa-ratona.jpg'
import Sofa from './assets/sofa.jpg'



const App = () => {
  return (
   <div><div className="navegador">
    <NavBar/>
  </div>
    <div className="main">
      
  <Card nombre="Sillon" precio="$20000" imagen={Sillon}/>
  <Card nombre="Mesa" precio="$10000" imagen={Mesa}/>
  <Card nombre="Sofa" precio="$40000" imagen={Sofa}/>
  </div>
  </div>
  );

}

export default App;