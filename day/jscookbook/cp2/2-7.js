document.getElementById('validate').addEventListener('click', function(event){
    event.preventDefault();

    //요소 키 값의 배열 만들기

    var elms = document.getElementById("picker");
    var elemArray = new Object();
    console.log(elemArray);
    for (var i = 0; i <elms.length; i++) {
        if(elms[i].type == "text"){
            elemArray[elms[i].id] = elms[i].value;
            
        }
        var str ='';
        Object.keys(elemArray).forEach(function(key){
           // console.log(elemArray);
            var value = elemArray[key];
            str += key + '->' + value + '<br />';
            
        });
        document.getElementById("result").innerHTML = str;
    }
}, false);

//여기서 왜 first가 자동으로 나오는지 모르겠음.. 토요일에 물어봐야지..