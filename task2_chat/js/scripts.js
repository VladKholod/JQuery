//function sendMessage()
//{
//    var time=new Date();
//    var hours=time.getHours();
//    var minutes=time.getMinutes();
//    var seconds=time.getSeconds();
//    time=hours+":"+minutes+":"+seconds;
//
//    var message=document.getElementById('message').value;
//
//    var node=document.createElement("p");
//    node.innerHTML=message+"<br>"+time;
//
//    document.getElementById('message').value="";
//    document.getElementById('container').appendChild(node);
//}

$('#send').click(function(){
    var message = $('#message');
    if(message.val().trim() == '')
        return;
    
    var time = new Date();  
    time = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    
    $('#container').append('<p>' + message.val() + '<br>' + time + '</p>');
    
    message.val('');
});