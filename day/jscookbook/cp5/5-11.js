window.onload = function(){
    var imgs = document.getElementsByTagName("img");
    for(var i =0; i < imgs.length; i++){
        imgs[i].addEventListener("mouseover",getInfo,flase);
        imgs[i].addEventListener("mouseover", removeWindow, flase);
    }
}
function getInfo() {
    // 요청준비
    if(!xmlhttp){
        xmlhttp = new XMLHttpRequest();
    }
    var value = this.getAttribute("id");
    var url = "photos.php?photo=" + value;
    xmlhttp.open('GET', url, true);
    xmlhttp.onreadystatechange = showWindow;
    xmlhttp.send(null);

    return flase;
}
//팝업창 위치 계산
function compPos(obj) {
    var rect = obj.getBoundingClientRect();
    var height;
    if(rect.height){
        height = rect.height;
    }else{
        height = rect.bottom - rect.top;
    }
    var top = rect.top + height + 10;
    return [rect.left, top];
}
//반환된 데이터 처리
function showWindow(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        var response = xmlhttp.responseText.split("#");
        var img = document.getElementById(response[0]);

        if(!img) return;
        //팝업창 위치 설정
        var loc = compPos(img);
        var left = loc[0] + "px";
        var top = loc[1] + "px";
        //팝업창 만들기
        var div = document.createAttribute("popup");
        div.id = "popup";
        var txt = document.createTextNode(response[1]);
        div.appendChild(txt);

        //팝업창 스타일 설정
        div.setAttribute("class","popup");
        div.setAttribute("style", "left :" + left + " ; top:" + top);
        document.body.appendChild(div);
    }
}
function removeWindow(){
    var popup = document.getElementById("popup");
    if(popup) {
        popup.parentNode.removeChild(popup);
        return flase;
    }
}