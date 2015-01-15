//addEventListener("keydown", function(event){
//    keydownEvent(event);
//});
//
//var firstDigit = '';
//var secondDigit = '';
//var operation = '';
//
//function getId(id)
//{
//    return document.getElementById(id);
//}
//
//function backspace()
//{
//    var result = getId('result');
//    
//    if(result.value.length == 1)
//        result.value = 0;
//    else 
//        result.value = result.value.slice(0, result.value.length - 1);
//}
//
//function negate()
//{
//    var result = getId('result');
//    result.value = result.value * -1;
//}
//
//function isEqual()
//{
//    var result = getId('result');
//    
//    var evalExpression = eval(firstDigit + operation + secondDigit);
//    
//    getId('historyUl').innerHTML += "<li>" + firstDigit+ ' ' + operation + ' ' + secondDigit + ' = ' + evalExpression + "</li>";
// 
//    if(operation=='/' && secondDigit != 0)
//        result.value = evalExpression;
//}
//
//function init()
//{
//    var result = getId('result');    
//    result.value = 0;
//    
//    firstDigit = '';
//    operation = '';
//    
//    getId('history').innerHTML = '<ul id="historyUl"></ul>';
//    getId('expression').innerHTML = '';
//    
//    result.focus();
//}
//
//function addSymbol(symbol)
//{
//    var result = getId('result');
//
//    if(symbol!='.')
//    {
//        if(result.value == '0')
//        {
//            result.value = symbol;
//        }
//        else
//        {
//            result.value += symbol;
//        }
//    }
//    else if(symbol=='.' && result.value.indexOf('.')==-1)
//    {
//        result.value += symbol;
//    }
//    
//    result.focus();
//}
//
//function keydownEvent(key)
//{
//    if(key.keyCode==8 && key.preventDefault)
//    {
//        key.returnValue = false;
//        setOperation('bspace');
//    }
//    
//    if((key.keyCode>95) && (key.keyCode<106))
//    {
//        var number = key.keyCode - 96;
//        addSymbol(number);
//    }
//    else if(key.keyCode == 13)
//    {
//        setOperation('=');
//    }
//    else if((key.keyCode>47) && (key.keyCode<58))
//    {
//        var number = key.keyCode - 48;
//        addSymbol(number);
//    }
//    else if(key.keyCode==190 || key.keyCode==110)
//    {
//        addSymbol('.');
//    }
//    else if(key.keyCode==107)
//    {
//        setOperation('+');
//    }
//    else if(key.keyCode==109)
//    {
//        setOperation('-');
//    }
//    else if(key.keyCode==106)
//    {
//        setOperation('*');
//    }
//    else if(key.keyCode==111)
//    {
//        setOperation('/');
//    }
//}

//function setOperation(op)
//{
//    var result = getId('result');
//    
//    var tempValue = result.value;
//    
//    if(firstDigit!='' && op!='ce' && op!='bspace')
//        secondDigit = result.value;
//    
//    switch(op)
//    {
//        case '+':
//            operation = op;
//            if(secondDigit!='')
//                isEqual();
//            break;
//        
//        case '-':
//            operation = op;
//            if(secondDigit!='')
//                isEqual();
//            break;
//            
//        case '*':
//            operation = op;
//            if(secondDigit!='')
//                isEqual();
//            break;
//            
//        case '/':
//            operation = op;
//            if(secondDigit!='')
//                isEqual();
//            break;
//            
//        case '+/-':
//            negate();
//            getId('historyUl').innerHTML += "<li>negate(" + tempValue + ") = " +result.value + "</li>";
//            return;
//            
//        case '1/x':
//            result.value = eval('1/'+ result.value);
//            getId('historyUl').innerHTML += "<li>1/" + tempValue + " = " + result.value + "</li>";
//            return;
//            
//        case '√':
//            if(parseFloat(result.value)>0)
//            {
//                result.value  = Math.sqrt(result.value);    
//                getId('historyUl').innerHTML += "<li>√" + tempValue + " = " + result.value + "</li>";
//            } 
//            else
//            {
//                getId('historyUl').innerHTML += "<li>√" + tempValue + " = NaN</li>";
//            }
//            return;
//            
//        case '%':
//            result.value = eval(result.value + '/100');
//            getId('historyUl').innerHTML += "<li>% " + tempValue + " = " + result.value + "</li>";
//            return;
//            
//        case 'bspace':
//            backspace();
//            return;
//        
//        case 'c':
//            init();
//            return;
//            
//        case 'ce':
//            result.value = '0';
//            return;
//        case '=':
//            isEqual();
//            break;
//    }
//    
//    if(secondDigit == '')
//    {
//        firstDigit = result.value;
//        result.value = '0';
//        getId('expression').innerHTML = firstDigit+ ' ' + operation;
//    }
//    else
//    {
//        firstDigit = '';
//        getId('expression').innerHTML = firstDigit;
//    }
//    
//    secondDigit = ''; 
//    result.focus();
//}

$(document).ready(function(){
    $('#result').on('keydown',function(event){
        keydownListener(event);
    });
    
    $(':button.operation').css('color' , '#f00');
    $(':button.operation').click(function(){
        setOperation($(this).val());
    });
    
    
    $(':button.symbol').css('color' , '#00f');
    $(':button.symbol').click(function(){
        addSymbol($(this).val());
    });
    
    init();
});

var firstDigit = '';
var secondDigit = '';
var operation = '';

function keydownListener(key)
{
    if(key.keyCode==8 && key.preventDefault)
    {
        key.preventDefault();
        setOperation('←');
    }
    
    if((key.keyCode>95) && (key.keyCode<106))
    {
        addSymbol(key.keyCode - 96);
        
    }
    else if(key.keyCode == 13)
    {
        setOperation('=');
    }
    else if((key.keyCode>47) && (key.keyCode<58))
    {
        addSymbol(key.keyCode - 48);
    }
    else if(key.keyCode==190 || key.keyCode==110)
    {
        addSymbol('.');
    }
    else if(key.keyCode==107)
    {
        setOperation('+');
    }
    else if(key.keyCode==109)
    {
        setOperation('-');
    }
    else if(key.keyCode==106)
    {
        setOperation('*');
    }
    else if(key.keyCode==111)
    {
        setOperation('/');
    }
}

function addSymbol(symbol){
    var result = $('#result');

    if(symbol!='.')
    {
        if(result.val() == '0')
        {
            result.val(symbol);
        }
        else
        {
            result.val(result.val() + symbol);
        }
    }
    else if(symbol=='.' && result.val().indexOf('.')==-1)
    {
        result.val(result.val() + symbol);
    }
    
    result.focus();
}

function setOperation(op){
    var result = $('#result');
    var historyUl = $('#historyUl');
    
    var tempValue = result.val();
    
    if(firstDigit!='' && op!='CE' && op!='←')
        secondDigit = result.val();
    
    switch(op)
    {
        case '+':
            operation = op;
            if(secondDigit!='')
                isEqual();
            break;
        
        case '-':
            operation = op;
            if(secondDigit!='')
                isEqual();
            break;
            
        case '*':
            operation = op;
            if(secondDigit!='')
                isEqual();
            break;
            
        case '/':
            operation = op;
            if(secondDigit!='')
                isEqual();
            break;
            
        case '+/-':
            negate();
            
            historyUl.append("<li>negate(" + tempValue + ") = " +result.val() + "</li>");
            
            return;
            
        case '1/x':
            result.val(eval('1/'+ result.val()));
            
            historyUl.append("<li>1/" + tempValue + " = " + result.value + "</li>");

            return;
            
        case '√':
            if(parseFloat(result.val())>0)
            {
                result.val(Math.sqrt(result.val()));
                
                historyUl.append("<li>√" + tempValue + " = " + result.val() + "</li>");
            } 
            else
            {
                historyUl.append("<li>√" + tempValue + " = NaN</li>");
            }
            return;
            
        case '%':
            result.val(eval(result.val() + '/100'));
            
            historyUl.append("<li>% " + tempValue + " = " + result.val() + "</li>");
            
            return;
            
        case '←':
            backspace();
            return;
        
        case 'C':
            init();
            return;
            
        case 'CE':
            result.val('0');
            return;
        case '=':
            isEqual();
            break;
    }
    
    if(secondDigit == '')
    {
        firstDigit = result.val();
        result.val('0');
        $('#expression').text(firstDigit + ' ' + operation);
    }
    else
    {
        firstDigit = '';
        $('#expression').text(firstDigit);
    }
    
    secondDigit = ''; 
    result.focus();
}

function backspace()
{
    var result = $('#result');
    
    if(result.val().length == 1)
        result.val(0);
    else 
        result.val(result.val().slice(0, result.val().length - 1));
}

function negate()
{
    var result = $('#result');
    result.val(result.val() * -1);
}

function isEqual()
{
    var result = $('#result');
    var evalExpression = result.val();
    if(firstDigit!='')
        evalExpression = eval(firstDigit + operation + secondDigit);
    
    $('#historyUl').append("<li>" + firstDigit+ ' ' + operation + ' ' + secondDigit + ' = ' + evalExpression + "</li>");
 
    if(operation=='/' && secondDigit != 0 || operation!='/')
    {
        firstDigit = evalExpression;
        result.val(evalExpression);
    }
    
    operation = '';
}

function init()
{
    var result = $('#result');    
    result.val('0');
    
    firstDigit = '';
    operation = '';
    secondDigit = '';
    
    $('#historyUl').empty();
    $('#expression').empty();
    
    result.focus();
}