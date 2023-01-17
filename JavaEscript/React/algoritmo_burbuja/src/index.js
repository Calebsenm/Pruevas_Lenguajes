

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Button3 from './components/Buttons/buttin3';
import Button2 from './components/Buttons/button2';
import Button1 from './components/Buttons/button1';

import Square1 from "./components/Suquare1"
import Header from "./components/Header"

import Option from './components/Option';

let List = [3, 10, 5, 4, 6, 1, 2, 7, 9, 8]


function Box() {
    return (
        <div className="Box">
            <div className="Box1">
                <Button1 value={" Ingresar Numeros "} />
                <Button2 value={" Ordenar List "} />
                <Button3 value={" Desordenar  Lista "} />
            </div>
        </div>
    );
}


function Squares() {
    return (
        <div className="boxSquare">
            <Square1 value={List[0]} />
            <Square1 value={List[1]} />
            <Square1 value={List[2]} />
            <Square1 value={List[3]} />
            <Square1 value={List[4]} />
            <Square1 value={List[5]} />
            <Square1 value={List[6]} />
            <Square1 value={List[7]} />
            <Square1 value={List[8]} />
            <Square1 value={List[0]} />
        </div>
    );

}


export default function MyApp() {
    return (
        <>
            <Option />
            <div>
                <Header />
                <div className="BoxFather">
                    <Squares />
                    <Box />
                </div>
            </div>
        </>


    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MyApp());
