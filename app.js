const display = document.getElementById("display");

function turnoffDisplay(){
    display.value = '';
}

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(Error){
        display.value = "Error";
    }
}