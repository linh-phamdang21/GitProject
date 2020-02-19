function cashConvert() {
    let amount = document.getElementById("amount").value;
    let fromCountry = document.getElementById("fromcountry").value;
    let toCountry = document.getElementById("tocountry").value;
    let result = 0;
    if (fromCountry == "VietNam") {
        if (toCountry == "USA") {
            result = amount * (1 / 23000);
            alert(result);
        } else if (toCountry == "VietNam"){
            result = amount * (23000/23000)
            alert(amount)
        }
    }
    if (fromCountry == "USA") {
        if (toCountry == "VietNam") {
            result = amount * (23000/1);
            alert(result);
        } else if (toCountry == "USA"){
            result = amount * (1/1)
            alert(amount)
        }
    }
}