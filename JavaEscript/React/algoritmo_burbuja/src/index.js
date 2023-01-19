
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Square1 from "./components/Suquare1";
import Header from "./components/Header";
import { useState } from 'react';
import Option from "./components/Option";





let List = [3,6, 1, ]




function crearDiv() {

    const container = document.getElementById("root");

    // Crear un div y agregar párrafo y botón dentro utilizando innerHTML
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
       <div class="OptionWindowFather">
            <div class="OptionWindow">
                <div>
                    <form>
                        <label>Ingresa una lista </label>
                        <input type="text" class="Inp" />
                    </form>

                    <button class="botonC" id ="delete-button" >Aceptar</button>

                </div>
            </div>

        </div>
    `;

    // Añadir el div al contenedor
    container.appendChild(newDiv);

    // Obtener el botón
    const deleteButton = document.getElementById("delete-button");
    let inputEl = document.querySelector('.Inp');


    // Agregar evento click al botón para eliminar el div
    deleteButton.addEventListener("click", function () {
        container.removeChild(newDiv);
        
        let inputValue = inputEl.value
        List = inputValue
        document.write(List)

    });
}


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




function MyApp() {

    return (
        <>
            <div>
                <Header />
                <div className="BoxFather">
                    <Squares />
                    <div className="Box">
                        <div className="Box1">

                            <button className="Button_1" onClick={crearDiv}>Ingresar Numeros </button>

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

export default MyApp;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MyApp());

