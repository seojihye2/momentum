var date = document.getElementById("date");

var _date = new Date();

var _day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
date.innerHTML = _date.getMonth()+1+"/"+_date.getDate()+"/"+_day[_date.getDay()];