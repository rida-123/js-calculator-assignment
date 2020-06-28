function calc(num){
    var result=document.getElementById("result");
   result.value+=num;
}
function clearfun(){
    var result=document.getElementById("result");
    result.value="";
}
function eqlfun(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
}
function cefun(){
    var result=document.getElementById("result");
    result.value = result.value.substring(0, result.value.length - 1)
}
function sq(){
    var result=document.getElementById("result");
    result.value=eval(result.value)*eval(result.value);
}
function sqroot(){
    var result=document.getElementById("result");
    result.value=Math.sqrt(result.value);
}
function under(){
    var result=document.getElementById("result");
    result.value=1/result.value;
}


