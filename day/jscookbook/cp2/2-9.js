document.getElementById('validate').addEventListener('click', function(event){
    var str = "";
    document.querySelectorAll("#picker input").forEach(function(el,index,elArr){
        str += el.name + '->' + el.value + '<br />';
    });
    document.getElementById("result").innerHTML = str;
    event.preventDefault();
}, false);