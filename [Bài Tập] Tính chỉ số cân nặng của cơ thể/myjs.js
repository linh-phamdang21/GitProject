let weight = parseInt(prompt("Enter your Weight"));
let height = parseInt(prompt("Enter your Height"))
let bmi = weight/height;

if (bmi < 18)
    alert("Underweight");
else if (bmi < 25.0)
    alert("Normal");
else if (bmi < 30.0)
    alert("Overweight");
else
    alert("Obese");