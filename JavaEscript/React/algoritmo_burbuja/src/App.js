

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Square1 from "./components/Suquare1";
import Header from "./components/Header";
import { useState } from 'react';
import Modal from "./components/Modal";



//this function return the list of numbers and render the Squares 
function  Squares(list2) {
    return (
        <div className="boxSquare">            
            {list2.value.map((item, index) => {
                return (
                    <Square1 value= {list2.value[index]} />
                )
            })}
        </div>
    );

}

// this is the function principal for the app 
function App() {
    
  const [isOPen, setIsOpen] = useState(false);
  const [list , setList] = useState([]);

  // covert list of strings numbers 
  var list2 = [1,2]
  //var List3 = list.split("")
  const handleList = newList => {
    setList(newList);
  }
  
  


  return (
    <>
      <div>
        <Header />
                <div className="BoxFather">
                    <Squares value = {list2}/>
                    <div className="Box">
                        <div className="Box1">

                            <button className="Button_1" onClick={ () => setIsOpen(true)}>
                              Ingresar Numeros 
                            </button>
                            {isOPen && <Modal setIsOpen = {setIsOpen} handleList = {handleList }/>}
                            
                            <button className="Button_1" > 
                              Ordenar Lista 
                            </button>

                            <button className="Button_1"> 
                              Desordenar
                            </button> 
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default App;



