
function calculate() {
   let num1=document.getElementById("n1").valueAsNumber;
   let num2=document.getElementById("n2").valueAsNumber;
   let add=document.getElementById("add").checked;
   let subtract=document.getElementById("Subtraction").checked;
    let multiply=document.getElementById("Multiplication").checked;
    let divide=document.getElementById("Division").checked;
    let result="";
    if(add){
        result=num1+num2;
    }
    else if(subtract){
        result=num1-num2;
    }
    else if(multiply){
        result=num1*num2;
    }
    else if(divide){
        if(num2 === 0) {
            result="Cannot divide by zero";
        } else {
            result=num1/num2;
        }
    }
    document.getElementById("result").innerText = "Result: " + result;
}
 document.getElementById("calculate").addEventListener("click", calculate);