
---------  Js the basics --------- 

⭐️Time Stamps⭐️
+ 1  (00:00:00) JavaScript tutorial for beginners 🌐
+ 2  (00:08:02) variables ❎
+ 3  (00:16:32) arithmetic expressions 🧮
+ 4  (00:21:14) user input 🧮
+ 5  (00:25:41) type conversion 💱
+ 6  (00:30:11) const ⛔
+ 7  (00:33:13) Math 🔣
+ 8  (00:36:52) hypotenuse calc practice program 📐
+ 9  (00:43:12) counter program #️⃣
+ 10 (00:46:52) random number generator 🎲
+ 11 (00:50:53) useful string methods 🧵
+ 12 (00:55:13) string slicing ✂️
+ 13 (00:59:08) method chaining ⛓️
+ 14 (01:01:03) if statements ❔
+ 15 (01:05:24) checked property ✔️
+ 16 (01:12:39) switches 🔀
+ 17 (01:16:26) AND OR logical operators && ||
+ 18 (01:20:29) NOT logical operator ❕
+ 19 (01:23:26) while loops 🔁
+ 20 (01:26:14) do while loops 🔂
+ 21 (01:28:36) for loops 🔃
+ 22 (01:32:05) break and continue statements 💔
+ 23 (01:33:34) nested loops ➿
+ 24 (01:38:05) functions ☎️
+ 25 (01:42:43) return statement 🔙
+ 26 (01:45:36) ternary operator ❔
+ 27 (01:48:58) var vs let 🥊
+ 28 (01:53:25) template literals 💬
+ 29 (01:57:47) format currency 💲
+ 30 (02:02:47) number guessing game 🔢
+ 31 (02:06:55) temperature conversion program 🌡️
+ 32 (02:15:49) arrays 🍎
+ 33 (02:20:33) loop through an array ➰ 
+ 34 (02:23:16) sort an array of strings 🗃️
+ 35 (02:24:50) 2D arrays 🛒 
+ 36 (02:29:14) spread operator 🖐️
+ 37 (02:33:32) rest parameters 💤
+ 38 (02:37:09) callbacks 🤙
+ 39 (02:41:58) array.forEach() 🔚
+ 40 (02:45:19) array.map() ⚙️
+ 41 (02:48:10) array.filter() 🗑️
+ 42 (02:50:21) array.reduce() 🔁
+ 43 (02:52:33) sort an array of numbers 📋 
+ 44 (02:54:41) function expressions 🤫
+ 45 (02:59:55) arrow function expressions 🏹
+ 46 (03:05:42) shuffle an array 🃏
+ 47 (03:09:30) nested functions 🐣 
+ 48 (03:12:47) maps 🗺️
+ 49 (03:17:07) objects 🚗
50 (03:21:09) this keyword 🔝
#51 (03:24:08) classes 👨‍🏫
#52 (03:27:15) constructors 👷
#53 (03:30:48) static keyword ⚡
#54 (03:34:22) inheritance 👪
#55 (03:40:23) super keyword 🦸‍♂️
#56 (03:44:59) getters & setters 🏎️
#57 (03:51:17) objects as arguments 📫
#58 (03:53:44) array of objects 📮
#59 (03:56:52) anonymous objects 🎭
#60 (04:02:44) error handling 🏤
#61 (04:07:27) setTimeout() ⏰
#62 (04:12:16) setInterval() ⏲️
#63 (04:14:48) Date objects 📅
#64 (04:24:08) clock program 🕧
#65 (04:28:56) asynchronous ⏳
#66 (04:31:17) console.time() ⌚
#67 (04:33:46) promises 🤞
#68 (04:40:23) async 📥
#69 (04:43:12) await ✋
#70 (04:46:44) ES6 Modules 🚢
#71 (04:51:21) DOM intro ✨
#72 (04:54:50) element selectors 👇
#73 (05:03:35) DOM traversal 🌳
#74 (05:09:01) add/change HTML elements 🌎
#75 (05:14:01) add/change CSS properties 🎨
#76 (05:18:26) events 🎟️
#77 (05:24:32) addEventListener() 👂
#78 (05:30:28) show/hide HTML elements 💡
#79 (05:35:28) detect key presses 🛎️ 
#80 (05:40:21) animations 🎞️
#81 (05:49:40) canvas API 🖌️
#82 (06:02:34) window 🗔
#83 (06:08:43) cookies 🍪
#84 (06:22:57) stopwatch program ⏱️
#85 (06:35:11) rock paper scissors game ✊
#86 (06:46:46) tictactoe game ⭕
#87 (07:05:43) snake game 🐍 
#88 (07:34:32) pong game 🏓


curse from https://www.youtube.com/watch?v=8dWL3wF_OMw

---
##### Js the basics 

para usar js con html usa:

<body>
<escript src ="index.js" ></script>
</body>


-------------------------------------------------------------
output :
	console.log("Hola");
_____________________________________________________________

alert:
	window.alert(" ");
_____________________________________________________________
comment:

// coments
/* for more commensts */
-------------------------------------------------------------
variables: you can use for many types 

	1 - Declaration ( var , let , const)
		- let age; 
	2 - assignment  ( = )

let name = "caleb"  // String
let age  =  18	    // numbers
let student = true  // boolens


for the dom  you can use the xammple:

<p id = "p1"></p>
// JS
document.getElementById("p1").innerHTML = "Hello " + name
_____________________________________________________________

arithmetic expression
 
- > *  multiplication
- > +  addition  
- > -  subtraction
- > /  division
_ > %  module 
_____________________________________________________________

inputs:

html:
	<label id = "label" >Hola  </label>
	<input type = "text" id = "tx">
	<button type = "button" id = "bt" > Ingresar  </button>
js:

   let username;

   document.getElementByid("bt").onlick = function(){
		
	username = documment.getElementByid("tx").value
	console.log(username);

	 // this is for change the text of the elemt  
	document.getElementByid("label").innerHTML = username;



   }
_____________________________________________________________
type Convertion:

let age = "10";

let age1 = Number(age);
let age2 = String(age1);
let age3 = Booleam(age2);

console.log(typeof age1);

______________________________________________________________

const: is for not change the data
const Pi = 3.141519

--------------------------------------------------------------

Math:

let x = 3;

x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x , 2);
x = Math.sqrt(x);
x = Math.abs(x);
x = Math.max(x , 2 , 1);
x = Math.min(x , 2 , 1)
x = Math.PI
_______________________________________________________________

// for ramdoms numbers
let x = Math.floor(Math.ramdom() * 6 ) + 1;

----------------------------------------------------------------

string methods 

let Username = "caleb"

Username.lenght;

                numer of position os the word
                |
Username.charAt(3);
Username.indexOf("a");
// for espaces
.trim()
// Upper and Lower words
.toUpperCase();
.toLowerCase();

//replse character 

let phoneNumber = "121-323-233"
phoneNumber = phoneNumber.replaceALL("-","");

----------
slice():

let name  = "caleb sena"

// the index of the string since index o to 4 of a word
let name1 = name.slice(0,4)
// Out:
-> caleb


you can use many  methods 

let Letter = name.charAT(0).toUpperCase().trim();
________________________________________________________________________

age = 21;

if( age <= 12 ){ 

} 

else if(){

}
else{

}

------------------------------------------------------------------------
check the radiobuttom

<input type = "checkbox" id =  "checkbox">

let  value  = document.getElementByid("checkbox").checked
or

value.checked -> without put the  .checked int the funcition

_____________________________________________________________

let age = 1;

switch(age){
    case 1:
        break;
    case 2:
        break;

}

-----------------------------------------------------------------

  && -> y    both conditions be true  
  || -> or   either can be true

  !  -> not
  if(!(1 > 0 )){

  }
_________________________________________________________________

loop 

let usernme = " ";

while(username == ""){

}
------------------------------------------------------------------
do loop 

let hola = "hola";

do {

    // happend = ""
} while( hola == "hola");

___________________________________________________________________

for loop 

for( let counter = 0; counter <= 10 ; counter += 1){

}

you can use the word of continue  or break 
___________________________________________________________________

function values(){
    console.log("XD")

}

values();


______________________ 
return:

fucntion getAdd( a , b ){
    return  a + b
}

console.log(getAdd(2 , 4));
------------------------------------------------------------------------
ternary operator:

let age; 

let value = age >= 18 ? true: false;
________________________________________________________________________

let { } onli used
var ( ){} only funtion(){}

-------------------------------------------------------------------------
 
 let loro = "pepe"
 console.log(`hola a todos ${loro} `)
_________________________________________________________________________
hola.toLocateString("en-US")

this is for locate the string 

-------------------------------------------------------------------------
array:

let fruit = ["apple", "limon","Apple"]

fruit[4] = "Pear"

.push("")    // add
.pop("")     // remove
.unshift("") // add in the beginning
.shift();     // remoce the beginning element  
fruit.lenght 
.indexOf("limon")
-------------------------------------------------------------------------
let  prieces = [2,4,4,5,5]
 
for (let priece of pieces){
    console.log(piece)
}


.sort()
.reverse()
__________________________________________________________________________
2D array:

let fruit  = ["apple","mango"]
let fruit1 = ["Banana","Pear"]

let fruits = [fruit , fruit1]
___________________________________________________________________________

spred operator ....

____________________________________________________________________________
rest parameters
.w
suma(2,5,6,7,9)

fucntion suma(....numbers){
    

}
_____________________________________________________________________________
callback:

function sum(a , b , call){
    let su = a + b
    call();

}

function call(){
    document.getElementByid("myLabel").innerHTML = output; 
}
_______________________________________________________________

forEach: is just as a for but you can  use for list
----------------------------------------------------------------
.map()
----------------------------------------------------------------
.filter()
-----------------------------------------------------------------
.reduce()
------------------------------------------------------------------
arrow funtion:

const add = (x , y ) => return x + y;


---------------------------------------------------------------------
nested funtions:

functions insithe other funcions
----------------------------------------------------------------------
maps :

let store = new Map([
["a",2],
["b",1],

])

.get("")
.set("")
.delete("")
.log("")
----------------------------------------------------------------------

POO 

const car = {
model : "Mustang",
color : "red",
year  : 2023

drive : function(){
    console.log("Drive")
},
brake : function(){
    console.log("Brakes")
}

}

car.drive();
car.break();

______________________________________________________________________________
this 
_______________________________________________________________________________
class:

class Player {

    score = 0;

    pause(){

    }
    exit(){

    }

}

const player1 = new Player();

___________________________________________________________-------

constructor:

constructor (name , age , gapa){
    this.name = name;
    this.age = age;
    this.gapa = gapa;
}
--------------------------------------------------------------------
static 
________________________________________________________________________________

class animal{

}

class rabbit extends animal{

}

------------------------------------------------------------------------
super()

is used for the use the irterance


setter()
getters()
-------------------------------------------------------------------------

class car{
    
    constructor(car){
        this.car = car;
    }
}

const car1 = new car("lor")
const car2 = new car("how")
const car3 = new car("lis")
const car4 = new car("lo")

cont cars = [car1 , car2 , car3 , car4 ]

cars[0].car();
------------------------------------------------------------------------------
anonymous objebs

let[
    new car("agua"),
    new car("break"),
]

_________________________________________________________________________________
error 

try{

} catch(error){

} finally{

}
 
____________________________________________________________________________________

setTimeout() // put the time  
setInterval() // put interval of time 

______________________________________________________________________________________

let date = new Date();
date.getFullYear();
.getDate();
.getDay();
.getMonth();
.getHours();
.getMinutes();
.getSeconds();

you can use setDate(21) and the others 

________________________________________________________________________________________

sycronous code         start finish now
asynconous code

-----------------------------------------------------------------------------------------

console.time("")
console.timeEnd("")

------------------------------------------------------------------------------------------

promise:

const promise = new Promise((resolve,reject ) =>{
    let fileLoaded = true; 
    
    if(fileLoaded){
        resolve("File loaded")
    }

});


promise.then( " to do somenting " )


i do not underestand
-----------------------------------------------------------------------
async = makes a function return a Promise

async function load(){

}
------------------------------------------------------------------------
await = makes an async function wait for a promise
__________________________________________________________________________________________

modules: 
    -> export const PI = 3,1415

-> import{ PI} from "./main.js"
------------------------------------------------------------------------------------------
DOM  = an interface for changing the conten of the page
concole.log(document) // propities
documnet = loking for many propities 
document.body.style.background = "skyblue";

____________________________________________________________________________________________


there are many values for the: 
getElementBY(here the elements)

queriSelectors = for the first elemnt

---------------------------------------------------------------------------------------------
you can use the 

.firsElementChild
.lastElementChild
.parentElementSilibing
.nextElementSilibinf
_____________________________________________________________________________________________
add / change HTML elements

const tag = document.createElement("h1");
nameTag.InnerHTML = "XD"

document.body.append(tag)
---------------------------------------------------------------------------------------------
events:

onclick = "doSometing()"
doSometing()

other:
// const 

const elemnt = document.body;
element.onload = doSometing;

func doSomenting(){
    alert("xd")
}



.onclick 
.onload
.onchange
.onmouseover
.onmouseout

______________________________________________________________________________________________
.addEventListener(event,function,usecapture)

______________________________________________________________________________________________

key lisqyteners:
window.addEventListener("keydowm",event => console.log(event.key))



const myDiv = document.getElementBYid("myDiv");
window.addEventListener("keydowm",move)

function move(event){

    switch(event.key){
        case "ArrowDowm":
            break;
        case "ArroUP":
            break;


    }

}

-------------------------------------------------------------------------------------------------------
cambas:
    you can use the cambas  and js for make "figuras",

_______________________________________________________________________________________________________
window : interface used to takl to the browser the DOM is a propetery 
         of a window
_______________________________________________________________________________________________________
cookie: 
document.cookie = "";
--------------------------------------------------------------------------------------------------------
