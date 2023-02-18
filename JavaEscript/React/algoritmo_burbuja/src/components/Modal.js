
import {useState} from "react";
 


// this is a function modal for the modal conponent
function Modal( {setIsOpen , handleList}) {
  
  const [inputValue , setInputValue ] = useState(''); 
  
  const handleSubmit = () => {
    handleList(inputValue);
    setIsOpen(false);    
  }  

  return (
        <div className="OptionWindowFather">
          <div className = "BoxModal">
            <div className="OptionWindow">
                <div className = "InputModal">
                  <form>
                    <label>Ingresa numeros separados por coma </label>
                      <input 
                        type="text" className="Inp"  
                        value = {inputValue} onChange={e => setInputValue(e.target.value)}
                      /> 
                  </form>
                </div>
                  <div className= "ButtonModal">
                    <button className="botonC" onClick= {handleSubmit}> 
                      Aceptar
                    </button>
                  </div>
            </div>
          </div>
        </div>
    );
}

export default Modal;

