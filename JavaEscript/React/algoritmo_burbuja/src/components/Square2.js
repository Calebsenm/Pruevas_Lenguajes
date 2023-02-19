
import React , { useState} from 'react';

function Square2( number ){ 
  const [posicion ,setPosicion] = useState({x : 0 , y :0 });

  const style = {
    'text-align':'center',
    width: '50px',
    height:'50px',
    margin:'5px',
    background : 'yellowgreen',
   // position: 'absolute',
    transform: `translate(${posicion.x}px, ${posicion.y}px)`,
  };
  
  const mover = () => {
    setPosicion(
      {
        x: posicion.x +20,
        y: posicion.y +50,
      }
    );
  };

  return(
    <div 
      className = "greenBox"
      style = {style}
      onClick = {mover}
    >

      <p>{number.value}</p>
    </div>
  )
}

export default Square2;
