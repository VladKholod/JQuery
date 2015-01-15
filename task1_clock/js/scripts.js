//function RunClock()
//{
//    var time=new Date();
//    var hours=time.getHours();
//    var minutes=time.getMinutes();
//    var seconds=time.getSeconds();
//
//    document.getElementById('clock').innerHTML=hours+":"+minutes+":"+seconds;
//    time=setTimeout('RunClock()',1000);
//}


$(document).ready(function(){
   setInterval(function(){
       var time = new Date();    
       $('#clock').html(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds());
   }, 500);
});