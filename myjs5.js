function input1() {
    let input1 = Number(document.getElementById("input1").value);
    return input1
}

function input2() {
    let input2 = Number(document.getElementById("input2").value);
    return input2
}

function addition(){
    let add = input1() + input2();
    document.getElementById("result").innerHTML= "Result: " + add;
}

function subtraction() {
    let sub = input1() - input2();
    document.getElementById("result").innerHTML= "Result: " + sub;
}

function multiplication() {
    let mul = input1() * input2();
    document.getElementById("result").innerHTML= "Result: " + mul;
}

function division() {
    let div = input1() / input2();
    document.getElementById("result").innerHTML= "Result: " + div;
}

function pageReload() {
    location.reload()
}