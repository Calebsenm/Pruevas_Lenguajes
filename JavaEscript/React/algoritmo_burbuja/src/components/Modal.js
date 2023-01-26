
import {useState} from "react";

// this is a function modal for the modal conponent
function Modal( {setIsOpen , handleList}) {

  const [inputValue , setInputValue ] = useState(''); 
  const handleSubmit = () => {
    handleList(inputValue.split(",").map(Number));
    setIsOpen(false)
  }  

  return (
        <div className="OptionWindowFather">
            <div className="OptionWindow">
                <div>
                <form>
                  <label>Ingresa una lista </label>
                    <input 
                      type="text" className="Inp"  
                      value={inputValue} onChange={e => setInputValue(e.target.value)}
                    />

                </form>
                <button className="botonC" onClick= {handleSubmit}>  Aceptar
                </button>
                
              </div>
            </div>
        </div>
    );
}

export default Modal;

