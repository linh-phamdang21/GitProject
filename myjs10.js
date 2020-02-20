function bai1(){
    let a = parseInt(prompt("a: "));
    let b = parseInt(prompt("b: "));
    result = (a + b < 4) ? 'Below' : 'Over';
    alert(result);
}

function bai2() {
    let login = prompt("Enter your position: ")
    let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
    alert(message)
}
