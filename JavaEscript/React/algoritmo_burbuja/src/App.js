

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Square1 from "./components/Suquare1";
import Square2 from "./components/Square2.js"
import Header from "./components/Header";
import { useState, useEffect } from 'react';
import Modal from "./components/Modal";


// this function going to sort the numbers 
// Optimized implementation of bubble sort Algorithm 
function BubbleSort(arr) {

  console.log(arr)
  var i, j;
  var len = arr.length;
  var isSwapped = false;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
        console.log(arr)
      }
    }
    // IF no two elements were swapped by inner loop, then break 
    if (!isSwapped) {
      break;
    }
  }
  // Print the array
  console.log(arr)

  return arr;
}

//this function return the list of numbers and render the Squares 
function Squares(list2) {
  return (
    <>
      <div className="boxSquare">
        {list2.value.map((item, index) => {
          return (
            <>
              <Square1 key={index} value={list2.value[index]} />
            </>
          )
        })}
      </div>
    </>
  );
}


// this is for show the new list 

function Squares2(list2) {
  const [visibleSquares, setVisibleSquares] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSquares((prevVisibleSquares) => {
        if (prevVisibleSquares < list2.value.length) {
          return prevVisibleSquares + 1;
        } else {
          return prevVisibleSquares;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [list2.value.length]);

  return (
    <div className="boxSquare">
      {list2.value.slice(0, visibleSquares).map((item, index) => (
        <Square2 key={index} value={list2.value[index]} />
      ))}
    </div>
  );
}



// this is the function principal for the app 
function App() {

  const [isOPen, setIsOpen] = useState(false);
  const [list, setList] = useState([]);
  const [newList, setNewList] = useState([]);

  var listOne = []
  // covert list of strings numbers 
  if (list != "") {
    var listNthree = list.split(",").map(function (num) {
      return parseInt(num)
    })
    listOne = listNthree
  }

  const handleList = newList => {
    setList(newList);
  }

  return (
    <>
      <div>
        <Header />
        <div className="BoxFather">
          <Squares value={listOne} />
          <Squares2 value={newList} />
          <div className="Box">
            <div className="Box1">

              <button className="Button_1" onClick={() => setIsOpen(true)}>
                Ingresar Numeros
              </button>
              {isOPen && <Modal setIsOpen={setIsOpen} handleList={handleList} />}

              <button
                className="Button_1"
                onClick={
                  () => setNewList(BubbleSort(listOne))
                }
              >
                Ordenar Lista
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App;

