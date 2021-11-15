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
    var CC=parseInt(year.value.slice(0,2))
var YY=parseInt(year.value.slice(2,4))
var MM=parseInt(month.value)
var DD=parseInt(day.value)
var weekday= Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7)
let sum=""
if (weekday==0)
{
  sum=6
}
  else{
    sum=weekday-1
  }
  var male=document.getElementById("allmales")
  var female=document.getElementById("allfemales")