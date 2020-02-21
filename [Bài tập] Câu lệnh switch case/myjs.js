function showDay() {
    let month = document.getElementById("month").value;
    month = parseInt(month);
    if (month > 0 && month <= 12){
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById("export").innerHTML = "Thang " + month + " co 31 ngay";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById("export").innerHTML = "Thang " + month + " co 30 ngay";
                break;
            case 2:
                document.getElementById("export").innerHTML = "Thang " + month + " co 28 hoac 29  ngay";
                break;
        }
    } else{
        document.getElementById("export").innerHTML = "Khong co thang nay";
    }
}