// bt1
function bai1() {
    let phys = parseInt(prompt("Enter your Physic Mark"));
    let che = parseInt(prompt("Enter your Chemistry Mark"));
    let bio = parseInt(prompt("Enter your Biology Mark"));
    let average = (phys + che + bio)/3;

    alert("Physic: " + phys);
    alert("Chemistry: " + che);
    alert("Biology: " + bio);
    alert("Average: " + average);
}

function bai2() {
    let tem = parseInt(prompt("Enter the Temperature Celcius: "));
    let convertTem = ((tem * 9)/5)+32;
    alert("Celcius: " + tem);
    alert("Fahrenheit: " + convertTem);
}

function bai3() {
    let radius = parseInt(prompt("Enter the Radius"));
    let area = (radius*radius)* Math.PI;
    alert("Radius: " + radius);
    alert("Area: " + area);
}

function bai4() {
    let radius = parseInt(prompt("Enter the Radius"))
    let perimeter = (radius * 2) * Math.PI;
    alert("Radius: " + radius)
    alert("Perimeter: " + perimeter);
}