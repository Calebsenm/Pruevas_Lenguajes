

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button1 from "./components/Buttons/butom1"; 
import Square1 from "./components/Suquare1"
import Header from "./components/Header"


function Box(){
    return(
        
        <div className="Box">
            <div className = "Box1">
                <Button1 value = {" No Me des  Click :D "}/> 
                <Button1 value = {" Dame Click :D "}/>
                <Button1 value = {" Solo da Click :D"}/> 
            </div>
        </div>
    );

}


function Squares(){
     
    return(
        <div > 
                <Square1 value = {4}/>
                <Square1 value = {5}/>
                <Square1 value = {3}/>     
        </div>
    );

}

export default function MyApp(){
    return(
        <div>
            <Header/>
            <div className = "BoxFather"> 
                <Squares />
                <Box/>
            </div>
        </div>
           
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MyApp());


