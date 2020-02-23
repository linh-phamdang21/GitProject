let inputNum = "";
function buttonC() {
    inputNum = "";
    document.getElementById("output").value = 0;
}

function button1() {
    inputNum+= 1;
    document.getElementById("output").value = inputNum;
}

function button2() {
    inputNum+= 2;
    document.getElementById("output").value = inputNum;
}

function button3() {
    inputNum+= 3;
    document.getElementById("output").value = inputNum;
}

function button4() {
    inputNum+= 4;
    document.getElementById("output").value = inputNum;
}

function button5() {
    inputNum+= 5;
    document.getElementById("output").value = inputNum;
}

function button6() {
    inputNum+= 6;
    document.getElementById("output").value = inputNum;
}

function button7() {
    inputNum+= 7;
    document.getElementById("output").value = inputNum;
}

function button8() {
    inputNum+= 8;
    document.getElementById("output").value = inputNum;
}

function button9() {
    inputNum+= 9;
    document.getElementById("output").value = inputNum;
}

function button0() {
    inputNum+= 0;
    document.getElementById("output").value = inputNum;
}

function buttonEqual() {
    let result = eval(inputNum);
    document.getElementById("output").value = result;
}

function buttonAdd() {
    inputNum+= "+";
    document.getElementById("output").value = inputNum;
}

function buttonSub() {
    inputNum+= "-";
    document.getElementById("output").value = inputNum
}

function buttonMul() {
    inputNum+= "*";
    document.getElementById("output").value = inputNum
}

function buttonDiv() {
    inputNum+= "/";
    document.getElementById("output").value = inputNum
}