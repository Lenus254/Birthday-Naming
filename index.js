function validateForm() {
 
    var day = document.getElementById("date")
    var month = document.getElementById("month")
    var year = document.getElementById("year")
    if ((day.value <= 0) || (day.value> 31))
        {
      alert("you entered invalid day");
    }
   
   else if ((month.value <= 0) || (month.value> 12))
        {
      alert("month is out of range");
    }