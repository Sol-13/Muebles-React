import React from 'react';



const Card = props => {

return (
 
  <div className="main">
    <div className="card">
   <img src= {props.imagen} alt="mueble"></img>
   <div className="datos">
      <p className="nombre">{props.nombre}</p>
      <p className="precio">{props.precio}</p>
    </div>
    </div>
   
  </div>

);
};

export default Card;