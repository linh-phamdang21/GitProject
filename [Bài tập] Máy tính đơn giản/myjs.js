let tempNumber = "";
let operator = "";

function buttonC() {
    tempNumber = "";
    document.getElementById("output").value = 0;
}

function button1() {
    tempNumber+= 1;
    document.getElementById("output").value = tempNumber;
}

function button2() {
    tempNumber+= 2;
    document.getElementById("output").value = tempNumber;
}

function button3() {
    tempNumber+= 3;
    document.getElementById("output").value = tempNumber;
}

function button4() {
    tempNumber+= 4;
    document.getElementById("output").value = tempNumber;
}

function button5() {
    tempNumber+= 5;
    document.getElementById("output").value = tempNumber;
}

function button6() {
    tempNumber+= 6;
    document.getElementById("output").value = tempNumber;
}

function button7() {
    tempNumber+= 7;
    document.getElementById("output").value = tempNumber;
}

function button8() {
    tempNumber+= 8;
    document.getElementById("output").value = tempNumber;
}

function button9() {
    tempNumber+= 9;
    document.getElementById("output").value = tempNumber;
}

function button0() {
    tempNumber+= 0;
    document.getElementById("output").value = tempNumber;
}

function buttonEqual() {
    let result = eval(tempNumber);
    document.getElementById("output").value = result;
}

function buttonAdd() {
    tempNumber+= "+";
    document.getElementById("output").value = tempNumber;
}

function buttonSub() {
    tempNumber+= "-";
    document.getElementById("output").value = tempNumber
}

function buttonMul() {
    tempNumber+= "*";
    document.getElementById("output").value = tempNumber
}

function buttonDiv() {
    tempNumber+= "/";
    document.getElementById("output").value = tempNumber
}