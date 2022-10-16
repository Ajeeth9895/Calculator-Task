
//   DOM Creation

let title = document.createElement('h1');
title.setAttribute('id','title');
title.innerHTML='Calculator';
document.body.append(title);

let des = document.createElement('p');
des.setAttribute('id','description');
des.innerHTML='A calculator is a device that performs arithmetic operations on numbers.<br> Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.';
document.body.append(des);

let container = document.createElement('div');
container.setAttribute('id','container');
document.body.append(container);



let box = document.createElement('div');
box.setAttribute('id','box');
container.append(box);

let input = document.createElement('div');
input.setAttribute('id','input');
box.append(input);

let inp = document.createElement('input')
inp.setAttribute('type','text')
inp.setAttribute('id','result')
inp.setAttribute('placeHolder','0')
input.append(inp);

let but = document.createElement('div');
but.setAttribute('id','button')
box.append(but);

var clear = document.createElement("button");
clear.innerHTML = "C";
clear.setAttribute('id','clear');
clear.setAttribute('onclick','Clear()');
var body = document.getElementsByTagName("body")[0];
but.append(clear);

var del = document.createElement("button");
del.innerHTML = "D";
del.setAttribute('onclick','Del()');
var body = document.getElementsByTagName("body")[0];
but.append(del);

var dot = document.createElement('button');
dot.innerHTML='.'
dot.setAttribute('onkeypress','Dot()');
var body = document.getElementsByTagName('body')[0];
but.append(dot);

var mult = document.createElement('button');
mult.innerHTML='*'
mult.setAttribute('onkeypress','Mul()');
var body = document.getElementsByTagName('body')[0];
but.append(mult);

var seven = document.createElement('button');
seven.innerHTML='7';
seven.setAttribute('id','7')
seven.setAttribute('onclick','Seven()')
var body = document.getElementsByTagName('body')[0];
but.append(seven);

var eight = document.createElement('button');
eight.innerHTML='8';
eight.setAttribute('id','8');
eight.setAttribute('onclick','Eight()');
var body = document.getElementsByTagName('body')[0];
but.append(eight);

var nine = document.createElement('button');
nine.innerHTML='9';
nine.setAttribute('id','9');
nine.setAttribute('onclick','Nine()');
var body = document.getElementsByTagName('body')[0];
but.append(nine);

var divide = document.createElement('button');
divide.innerHTML='/'
divide.setAttribute('onclick','Divide()');
var body = document.getElementsByTagName('body')[0];
but.append(divide);

var four = document.createElement('button');
four.innerHTML='4';
four.setAttribute('id','4');
four.setAttribute('onclick','Four()');
var body = document.getElementsByTagName('body')[0];
but.append(four);

var five = document.createElement('button');
five.innerHTML='5';
five.setAttribute('id','5');
five.setAttribute('onclick','Five()');
var body = document.getElementsByTagName('body')[0];
but.append(five);

var six = document.createElement('button');
six.innerHTML='6';
six.setAttribute('id','6');
six.setAttribute('onclick','Six()');
var body = document.getElementsByTagName('body')[0];
but.append(six);

var minu = document.createElement('button');
minu.innerHTML='-';
minu.setAttribute('id','subtract');
minu.setAttribute('onclick','Minu()');
var body = document.getElementsByTagName('body')[0];
but.append(minu);

var one = document.createElement('button');
one.innerHTML='1';
one.setAttribute('id','1');
one.setAttribute('onclick','One()');
var body = document.getElementsByTagName('body')[0];
but.append(one);

var two = document.createElement('button');
two.innerHTML='2';
two.setAttribute('id','2');
two.setAttribute('onclick','Two()');
var body = document.getElementsByTagName('body')[0];
but.append(two);

var three = document.createElement('button');
three.innerHTML='3';
three.setAttribute('id','3');
three.setAttribute('onclick','Three()');
var body = document.getElementsByTagName('body')[0];
but.append(three);

var plus = document.createElement('button');
plus.innerHTML='+'
plus.setAttribute('id','add');
plus.setAttribute('onclick','Plus()');
var body = document.getElementsByTagName('body')[0];
but.append(plus);

var zero = document.createElement('button');
zero.innerHTML='0';
zero.setAttribute('id','0');
zero.setAttribute('onclick','Zero()');
var body = document.getElementsByTagName('body')[0];
but.append(zero);

var doubzer = document.createElement('button');
doubzer.innerHTML='00'
doubzer.setAttribute('onclick','Doubzer()');
var body = document.getElementsByTagName('body')[0];
but.append(doubzer);

var equal = document.createElement('button');
equal.innerHTML='='
equal.setAttribute('id','equal');
equal.setAttribute('onclick','Equal()');
var body = document.getElementsByTagName('body')[0];
but.append(equal);


// Function Area:

let output = document.getElementById('result');


function Clear(){
    output.value= "";
}

function Del(){
    output.value=output.value.slice(0,-1);
}

function Dot(){
    output.value +='.';
}

function Mul(){
    output.value +='*';
}

function Seven(){
    output.value +='7';
}

function Eight(){
    output.value +='8';
}

function Nine(){
    output.value +='9';
}

function Divide(){
    output.value +='/';
}

function Four(){
    output.value +='4';
}


function Five(){
    output.value +='5';
}

function Six(){
    output.value +='6';
}

function Minu(){
    output.value +='-';
}

function One(){
    output.value +='1';
}

function Two(){
    output.value +='2';
}

function Three(){
    output.value +='3';
}

function Plus(){
    output.value +='+';
}

function Zero(){
    output.value +='0';
}

function Doubzer(){
    output.value +='00';
}

function Equal(){
    output.value= eval(output.value);
}

//alert:if enter special characters

document.querySelector("#result").onkeypress = (e)=>{
    if(e.key=== "Enter"){
        Equal()
    }else if(!( e.key>=0 || e.key <=9 || e.key==="+" || e.key==="-" || e.key==="*" || e.key==="/" 
    || e.key==="." )){
        alert("Enter number only");
        e.preventDefault();
    }
}





