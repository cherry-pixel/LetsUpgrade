var d= new Date();
//Question 1
    //Displaying the Current Day
    day=d.getDay();
    weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    document.getElementById('day').innerHTML="Today is : "+weekdays[day];
    //Displaying the Current Time
    hrs=d.getHours();
    format= hrs>12 ? "PM" : "AM" ;
    tm= hrs>12 ? hrs-12 : hrs-0 ;
    document.getElementById('time').innerHTML="Current Time is : "+tm+" "+format+" : "+d.getMinutes()+" : "+d.getSeconds();
//Question 3
    date=d.getDate()
    mnth=d.setMonth()+1;
    yr=d.getFullYear();
    document.getElementById('date').innerHTML=date+"/"+mnth+"/"+yr;
