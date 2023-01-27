

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Square1 from "./components/Suquare1";
import Header from "./components/Header";
import { useState } from 'react';
import Modal from "./components/Modal";

let List = [3 , 6 , 1 , 2 , 4];


function Squares() {
    return (
        <div className="boxSquare">            
            {List.map((item, index) => {
                return (
                    <Square1 value={List[index]} />
                )
            })}
        </div>
    );

}


function App() {
    
  const [isOPen, setIsOpen] = useState(false);
  const [list , setList] = useState([]);

  const handleList = newList => {
    setList(newList);
  }

  
  return (
    <>
      <div>
        <Header />
                <div className="BoxFather">
                    <Squares />
                    <div className="Box">
                        <div className="Box1">

                            <button
                              className="Button_1" 
                              onClick={ () => setIsOpen(true)}
                              >Ingresar Numeros 
                          
                            </button>

                            {isOPen && <Modal 
                                          setIsOpen = {setIsOpen} 
                                          handleList = {handleList }
                                        />}

                            <button className="Button_1"

                            >Ordenar Lista
                            </button>

                            <button className="Button_1"

                            > Desordenar

                            </button> 
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default App;



