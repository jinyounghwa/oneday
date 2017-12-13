var nlElems = document.querySelectorAll('div');
var aElems = [].slice.call(nlElems);

aElems.forEach(function(elem) {
    console.log(elem.textContent);
});