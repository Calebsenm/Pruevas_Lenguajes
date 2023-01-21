

// this is a function modal for the modal conponent
function Modal( {setIsOpen}) {
    return (
        <div className="OptionWindowFather">
            <div className="OptionWindow">
                <div>
                <form>
                  <label>Ingresa una lista </label>
                  <input type="text" className="Inp"  />
                </form>
                <button className="botonC" onClick= {() => setIsOpen(false)}>Aceptar</button>
              </div>
            </div>
        </div>
    );
}

export default Modal;

