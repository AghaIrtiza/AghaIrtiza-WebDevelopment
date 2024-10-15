function printInDemo(toPrint){
    document.getElementById("demo").innerHTML = toPrint;
}
let number1 = 0;
let number2 = 20;
let number3 = 30;
// x = 100;
let arithematicOperation = (number1 + number2) ** number3 ;
// const a = 10;
// a = 200;

let check = ((number1+number2)==number3) ? check=number3 : "Numbers are not equal"; 
// document.getElementById("demo").innerHTML = check;

// while ( number1 < 100){
//     console.log("While Executing"+number1);
//     number1++;
// }

for(let i = 0; i < 10; i++){
    console.log("For Executing" + i);
}
// if( number1 == 10){
//     document.getElementById("demo").innerHTML = "Number 1 is smaller";
// }
// else if(number1 <= 10){
//     document.getElementById("demo").innerHTML = "Number 1 is 10";
// }
// else{
//     document.getElementById("demo").innerHTML = "Number 1 is greater";
// }
const identity = {Name:"Irtiza", 
    Qualification:"MS", Age:0};
printInDemo(identity.Name); 
printInDemo(identity.Qualification); 