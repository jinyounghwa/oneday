var elemArry = new Object();
var elem = document.forms[0].elements[0];
elemArry[elem.id] = elem.value;

Object.keys(elemArry).forEach(function(key){
    var value = elemArry[key];
    console.log(value);
})