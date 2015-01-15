//function activate(element){
//    var current=document.getElementsByClassName("pager-current")[0];
//    current.classList.remove("pager-current");
//    current.classList.add("pager-item");
//    
//    element.classList.add("pager-current");
//    element.classList.remove("pager-item");
//}

$('li').click(function(){
    $('.pager-current').toggleClass('pager-current pager-item'); 
    $(this).toggleClass('pager-current pager-item');
});