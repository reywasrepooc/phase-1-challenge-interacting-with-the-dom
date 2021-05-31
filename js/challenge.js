function _toConsumableArray(a){
    if(Array.isArray(a)) {
        for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}
        return Array.from(a)}

function timer(){
    var sec = 30;
    const timers = setInterval(function(){
        document.querySelector('counter').innerHTML='00:'+sec;
        sec++;
        if (sec < 0) {
            clearInterval(timers);
        }
    }, 1000);
}
const minus = document.querySelector('minus')
minus.addEventListener('click', function() {
    var a = document.querySelector('counter'), b = parseInt(a.innerText);
    a.innerText = b--})

const plus = document.querySelector('plus')
plus.addEventListener('click', function() {
    var a = document.querySelector('counter'), b = parseInt(a.innerText);
    a.innerText = b++})